import React, { Component } from 'react';

// import "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.js"
// import './socketioScript.js'
// import './script.js';
import './styles.css';
import AjaxAdapter from '../AjaxAdapter';
import UserAjaxAdapter from '../UserAjaxAdapter';

import BidDashboard from '../BidDashboard';
import UserDashboard from '../UserDashboard';
import AvailableItems from '../AvailableItems';
import Header from '../Header';
import ResetButton from '../ResetButton';
import io from 'socket.io-client'

const ItemDataModel = AjaxAdapter('/api/items');
const upForAuctionRoute = AjaxAdapter('/api/items/upForAuction');
const completedBidRoute = AjaxAdapter('/api/items/completedBid');

const UserDataModel = UserAjaxAdapter('/api/users/');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      price: 0,
      userID: 2,
      user: {},
    }
    this.addToAuction = this.addToAuction.bind(this);
    this.completedBidFn = this.completedBidFn.bind(this);
    this.getData = this.getData.bind(this);
    this.updateUserBalance = this.updateUserBalance.bind(this);
    this.resetPrice = this.resetPrice.bind(this);
    this.resetAuction = this.resetAuction.bind(this);
  }

    componentDidMount() {
      this.getUserData();
      this.getData();

      //all network events should go in componentDidMount
      this.socket = io.connect('/');

      this.socket.emit('newConnection')

      this.socket.on('latestBid', latestBid => {
        this.setState({ price: latestBid })
      })

      this.socket.on('update', () => {
        console.log('we got an update')
        this.getData();
      })
    }

  componentDidUpdate() {
   if(this.state.seconds == 'Time is up!'){
      this.updateBalance()
      this.setState({
        seconds: 6
      })
      this.resetPrice()
    }
  }

   async getUserData() {
    let userID = this.state.userID
    console.log('getting user data')
    this.setState({
      user: await UserDataModel.read(userID),
    });
  }


 async getData() {
    console.log('getting data')
    this.setState({
      items: await ItemDataModel.read(),
    });

  }

    async addToAuction(e){
    let valid = true
    this.state.items.forEach(function(el) {
      if(el.upForAuction === true){
        valid = false
      }
    });
    // update database
    if(valid){
      let id = e.target.id
      await upForAuctionRoute.update(id)
      // this.socket = io.connect('/');
      this.socket.emit('update')
      this.socket.emit('bid', {body:1,from:'firstBid'})
      this.socket.emit('load')
    }
    }

   async completedBidFn(id){
    console.log(this.state.price)
    await completedBidRoute.updateAfter(id,this.state.price)
  }

  async updateUserBalance(){
    let newBalance = this.state.user.balance - this.state.price
    await UserDataModel.update(this.state.userID,newBalance)
    .then(this.getData())
    .then(this.getUserData())
  }

  async resetPrice(){
    await this.setState({
      price: 0
    })
  }

  async resetAuction(){
    console.log('lets reset')
    await ItemDataModel.resetItems()
    this.socket.emit('reset')
  }

  render() {
    let { items, price, user } = this.state


    //console.log(items)
    // const { items } = this.props;
    return(
      <div>
        <Header />
        <BidDashboard items = {items} completedBidFn = {this.completedBidFn} filterFn={item => item.upForAuction && !item.completedBid} price={price} updateUserBalance={this.updateUserBalance} resetPrice={this.resetPrice}/>
        <ResetButton resetAuction = {this.resetAuction}/>
        <UserDashboard items = {items} filterFn={item => !item.upForAuction && item.completedBid} price={price} user={user} />
        <AvailableItems items = {items} addToAuction={this.addToAuction} filterFn={item => !item.upForAuction && !item.completedBid} />
      </div>
    )
  }
}
export default App;
