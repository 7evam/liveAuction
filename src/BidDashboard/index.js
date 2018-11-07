import React, { Component } from 'react';

class BidDashboard extends Component {
render() {
  // console.log(props)
  // const { items } = this.props;
function bidUp(){
  console.log('this works')
      socket.emit('chat',{
        bid: 'bidup',
        handle: socket.id
      })
    }


  return(
  <div id="fun-chat">
   <div id="chat-window">
      <div className = 'bidInfo'>
       Current Item: <span id='currentItem'></span><br />
       Current Bid: <span id='highBid'></span><br />
       Highest Bidder: <span id='highBidder'></span>
       <button id='bidup' onClick={bidUp}>Bid up 1</button>
      </div>
      <div id="output"></div>
   </div>
   <form method="POST" action='/1/edit?_method=PUT' onSubmit={ e => e.preventDefault() }>
      <input id="bid" name="bid" type = 'number' placeholder="manual bid"/>
      <button id='send'>Manual bid</button>
   </form>
  </div>
  )
  }
}
export default BidDashboard;
