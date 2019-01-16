import React, { Fragment, Component } from 'react';
import io from 'socket.io-client'
import ResetButton from '../ResetButton';

class UserDashboard extends Component{

render() {

let {
  items,
  filterFn,
  currentUser,
  availableBalance,
  resetAuction,
  latestBid,
  allUsers
} = this.props

if(latestBid.from === currentUser.username){
    availableBalance = availableBalance - latestBid.body
  }

return(
    <div id='userDashboard'>
    <div>Welcome {currentUser.username}</div>
    <div>Available balance: ${availableBalance}</div>
    <ResetButton resetAuction={resetAuction} />
    <hr/>
    <div className='scrollList'>
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
    </div>
    )
  }
}

export default UserDashboard;
