import React, { Fragment, Component } from 'react';
import io from 'socket.io-client'
import ResetButton from '../ResetButton';

class UserDashboard extends Component{

render() {

let items = this.props.items
let filterFn = this.props.filterFn
let currentUser = this.props.user
let availableBalance = this.props.user.balance
let resetAuction = this.props.resetAuction
let latestBid = this.props.latestBid
let allUsers = this.props.allUsers
if(latestBid.from === currentUser.username){
    availableBalance = availableBalance - latestBid.body
  }


  return(
  <div id='userDashboard'>
  <div>Welcome {currentUser.username}</div>
  <div>Available balance: ${availableBalance}</div>
  <ResetButton resetAuction={resetAuction} />
  <hr/>
  {
  allUsers.filter(user => user.username!=="Unowned" && user.username!==currentUser.username)
        .map((user,index) => (
          <Fragment key={index}>
          <p>{user.username}</p>
          <p>{user.balance}</p>
          <hr/>
          </Fragment>
          ))
      }
  </div>
  )
}
}

export default UserDashboard;
