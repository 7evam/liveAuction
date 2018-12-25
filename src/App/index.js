import React, { Component } from 'react';

// import "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.js"
// import './socketioScript.js'
// import './script.js';
import './styles.css';
import AjaxAdapter from '../AjaxAdapter';

import BidDashboard from '../BidDashboard';
import UserDashboard from '../UserDashboard';
import AvailableItems from '../AvailableItems';
import Header from '../Header';
import io from 'socket.io-client'

const ItemDataModel = AjaxAdapter('/api/items');
const upForAuctionRoute = AjaxAdapter('/api/items/upForAuction');
const completedBidRoute = AjaxAdapter('/api/items/completedBid');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      messages: [],
      price: 0,
    }
    this.addToAuction = this.addToAuction.bind(this);
    this.completedBidFn = this.completedBidFn.bind(this);
    this.getData = this.getData.bind(this);
    this.updateBalance = this.updateBalance.bind(this);
    this.resetPrice = this.resetPrice.bind(this);
  }

    componentDidMount() {
      this.getData();

      //all network events should go in componentDidMount
      this.socket = io.connect('/');
      this.socket.on('message', message => {
        this.setState({ messages: [message, ...this.state.messages] })
      })

      this.socket.on('addItem', () => {
        this.getData();
      })
  }

 async getData() {
    console.log('getting data')
    this.setState({
      items: await ItemDataModel.read(),
    });
  }

    async addToAuction(e){
    //update database
    let id = e.target.id
    await upForAuctionRoute.update(id)
    this.socket.emit('addItem')
    }

   async completedBidFn(id,price){
    await completedBidRoute.updateAfter(id,price);
    this.setState({
      items: await ItemDataModel.read(),
    });
    // await this.setState
  }

  async updateBalance(price){
   await this.setState({
      price: price
    })
  }

  async resetPrice(){
    await this.setState({
      price: 0
    })
  }

  render() {
    let { items, addToAuction, availableBalance, price } = this.state
    //console.log(items)
    // const { items } = this.props;
    return(
      <div>
        <Header />
        <BidDashboard items = {items} completedBidFn = {this.completedBidFn} filterFn={item => item.upForAuction && !item.completedBid} updateBalance={this.updateBalance} resetPrice={this.resetPrice}/>
        <UserDashboard items = {items} filterFn={item => !item.upForAuction && item.completedBid} price={price}/>
        <AvailableItems items = {items} addToAuction={this.addToAuction} filterFn={item => !item.upForAuction && !item.completedBid} />
      </div>
    )
  }
}
export default App;
