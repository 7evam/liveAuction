import React, { Component } from 'react';
import io from 'socket.io-client'



const UserDashboard = ({ items, filterFn, availableBalance }) => {


  // console.log(props)
  // const { items } = this.props;
  return(
  <div id='userDashboard'>
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

export default UserDashboard;
