import React, { Component } from 'react';
import io from 'socket.io-client'




class UserDashboard extends Component{


componentWillReceiveProps() {
  // let availableBalance = this.props.user.balance - this.props.price
}


render() {


let items = this.props.items
let filterFn = this.props.filterFn
let user = this.props.user
let availableBalance = this.props.user.balance - this.props.price

  return(
  <div id='userDashboard'>
  <div>Welcome {user.username}</div>
  <div>Available balance: ${availableBalance}</div>
    <h3>Items won</h3>
    <ul>
      {
      items.filter(filterFn)
        .map((item,index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))
    }
    </ul>

  </div>
  )
}
}

export default UserDashboard;
