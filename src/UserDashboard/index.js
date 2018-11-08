import React, { Component } from 'react';
import io from 'socket.io-client'



const UserDashboard = ({ items, filterFn }) => {


  // console.log(props)
  // const { items } = this.props;
  return(
  <div id='userDashboard'>
    <h3>Items won</h3>
    <ul>
      {
      items.filter(filterFn)
        .map((item,index) => (
          <li key={index}>
            {item.name}
          </li>
        ))
    }
    </ul>

  </div>

  )

}

export default UserDashboard;
