import React, { Component } from 'react';

// import "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.js"
// import './socketioScript.js'
// import './script.js';
import './styles.css';
import AjaxAdapter from '../AjaxAdapter';

import BidDashboard from '../BidDashboard';
import UserDashboard from '../UserDashboard';
import AvailableItems from '../AvailableItems';
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
    }
    this.addToAuction = this.addToAuction.bind(this);
    this.completedBidFn = this.completedBidFn.bind(this);
    this.getData = this.getData.bind(this);
  }

    componentDidMount() {
      console.log('yes comp did mount')
      this.getData();
      this.socket = io.connect('/');
      this.socket.on('message', message => {
        this.setState({ messages: [message, ...this.state.messages] })
      })
    }

  async getData() {
    console.log('GOT DATA')
    this.setState({
      items: await ItemDataModel.read(),
    });
  }

    async addToAuction(e){
    let id = e.target.id
    console.log(id)
    await upForAuctionRoute.update(id);
    console.log('GOT DATA')
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

  render() {
    let { items, addToAuction } = this.state
    //console.log(items)
    // const { items } = this.props;
    return(
      <div>

        <BidDashboard items = {items} completedBidFn = {this.completedBidFn} filterFn={item => item.upForAuction && !item.completedBid}/>
        <UserDashboard items = {items} filterFn={item => !item.upForAuction && item.completedBid}/>
        <AvailableItems items = {items} addToAuction={this.addToAuction} filterFn={item => !item.upForAuction && !item.completedBid} />
        <div>

        </div>
      </div>
    )
  }
}
export default App;
