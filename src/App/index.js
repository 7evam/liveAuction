import React, { Component, Fragment } from 'react';

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
import PickUser from '../PickUser';
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
      latestBid: {body: 0, from: undefined},
      userID: undefined,
      user: {},
      allUsers: [],
    }
    this.addToAuction = this.addToAuction.bind(this);
    this.completedBidFn = this.completedBidFn.bind(this);
    this.getData = this.getData.bind(this);
    this.updateUserBalanceDb = this.updateUserBalanceDb.bind(this);
    this.resetPrice = this.resetPrice.bind(this);
    this.resetAuction = this.resetAuction.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
    this.pickUser = this.pickUser.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.getThisUser = this.getThisUser.bind(this);
  }

    componentDidMount() {
      this.getData();
      this.getAllUsers();
      //all network events should go in componentDidMount
      this.socket = io.connect('/');

      this.socket.on('latestBid', latestBid => {
        this.setState({latestBid: latestBid,})
      })

      this.socket.on('update', () => {
        this.getData();
        this.getAllUsers();
        this.getThisUser();
      })
    }

   async getThisUser() {
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

  async getAllUsers() {
    console.log('getting all the users!')
    this.setState({
      allUsers: await UserDataModel.index(),
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
      this.socket.emit('bid', {body:1,from:this.state.user.username})
      this.socket.emit('load')
    }
    }

    async updateItem(id){
    if(this.state.user.username === this.state.latestBid.from){
      await completedBidRoute.updateAfter(id,this.state.latestBid.body,this.state.user.id)
    }
  }

   async completedBidFn(id){
    await this.updateItem(id)
    await this.updateUserBalanceDb()
    await this.resetPrice()
    await this.socket.emit('update')
  }

    async updateUserBalanceDb(){
    if(this.state.user.username === this.state.latestBid.from){
      let newBalance = this.state.user.balance - this.state.latestBid.body
      await UserDataModel.update(this.state.userID,newBalance)
      .then(this.getData())
      .then(this.getThisUser())
    }
  }

  async resetPrice(){
    await this.setState({
      latestBid: {}
    })
  }

  async resetAuction(){
    console.log('lets reset')
    await ItemDataModel.resetItems()
    await UserDataModel.resetUsers()
    await this.socket.emit('update')
  }

  async pickUser(e){
    let id = parseInt(e.target.id, 10)
    await this.setState({
      userID: id
    })
    this.getThisUser();
  }

  render() {
    let { items, latestBid, user, allUsers, userID } = this.state


    //console.log(items)
    // const { items } = this.props;
    return(
      <div>
        <Header />
        {userID ? (
        <div>
        <BidDashboard items = {items} completedBidFn = {this.completedBidFn} filterFn={item => item.upForAuction && !item.completedBid} user={user}/>
        <UserDashboard items = {items} filterFn={item => !item.upForAuction && item.completedBid} latestBid={latestBid} user={user} resetAuction={this.resetAuction}/>
        <AvailableItems items = {items} addToAuction={this.addToAuction} filterFn={item => !item.upForAuction && !item.completedBid} />
        </div>
          ) : (
          <PickUser pickUser={this.pickUser} allUsers={allUsers}/>
        )}
      </div>
    )
  }
}
export default App;
