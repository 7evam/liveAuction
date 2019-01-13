import React, { Component } from 'react';
import io from 'socket.io-client'
import ResetButton from '../ResetButton';




class AuctionHistory extends Component{


componentWillReceiveProps() {
  // let availableBalance = this.props.user.balance - this.props.price
}


render() {


let items = this.props.items
let filterFn = this.props.filterFn
let user = this.props.user
let availableBalance = this.props.user.balance
let resetAuction = this.props.resetAuction
let latestBid = this.props.latestBid
if(latestBid.from === user.username){
    availableBalance = availableBalance - latestBid.body
  }


  return(
  <div id='AuctionHistory'>
    <h3>Items won</h3>
    <ul>
      {
      items.filter(filterFn)
        .map((item,index) => (
          <li key={index}>
            {item.name} - ${item.price} won by {item.user.username}
          </li>
        ))
    }
    </ul>

  </div>
  )
}
}

export default AuctionHistory;
