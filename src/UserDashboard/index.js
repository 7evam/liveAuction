import React, { Component } from 'react';
import io from 'socket.io-client'
import ResetButton from '../ResetButton';




class UserDashboard extends Component{


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
  <div id='userDashboard'>
  <div>Welcome {user.username}</div>
  <div>Available balance: ${availableBalance}</div>
  <ResetButton resetAuction={resetAuction} />
  </div>
  )
}
}

export default UserDashboard;
