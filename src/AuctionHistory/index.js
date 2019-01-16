import React, { Component } from 'react';
import io from 'socket.io-client'
import ResetButton from '../ResetButton';

class AuctionHistory extends Component{

render() {

// destructure props
let {
items,
filterFn,
user,
availableBalance,
resetAuction,
latestBid
} = this.props

if(latestBid.from === user.username){
    availableBalance = availableBalance - latestBid.body
  }

  return(
  <div className='auctionHistory'>
    <h3 className="sectionHeader">Auction History</h3><hr/>
    <ul className="scrollList">
      {
      items.filter(filterFn)
        .map((item,index) => (
          <li key={index}>
            <span className='bold'>{item.user.username}</span><br/> {item.name} - ${item.price}
            <hr/>
          </li>
        ))
    }
    </ul>

  </div>
  )
}
}

export default AuctionHistory;
