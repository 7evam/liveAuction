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
  }

    componentDidMount() {
      this.getData();
      this.socket = io.connect('/');
      this.socket.on('message', message => {
        this.setState({ messages: [message, ...this.state.messages] })
      })
    }

  async getData() {
    this.setState({
      items: await ItemDataModel.read(),
    });
  }

    async addToAuction(e){
    let id = e.target.id
    await upForAuctionRoute.update(id);
    this.setState({
      items: await ItemDataModel.read(),
    });
  }

   async completedBidFn(id,price){
    await completedBidRoute.updateAfter(id,price);
    this.setState({
      items: await ItemDataModel.read(),
    });
  }

  async updateBalance(price){
   await this.setState({
      price: price
    })
  }

  render() {
    let { items, addToAuction, availableBalance, price } = this.state
    //console.log(items)
    // const { items } = this.props;
    return(
      <div>
        <Header />
        <BidDashboard items = {items} completedBidFn = {this.completedBidFn} filterFn={item => item.upForAuction && !item.completedBid} updateBalance={this.updateBalance}/>
        <UserDashboard items = {items} filterFn={item => !item.upForAuction && item.completedBid} price={price}/>
        <AvailableItems items = {items} addToAuction={this.addToAuction} filterFn={item => !item.upForAuction && !item.completedBid} />
      </div>
    )
  }
}
export default App;
