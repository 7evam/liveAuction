import React, { Component } from 'react';
import io from 'socket.io-client'


class UserDashboard extends Component {

  render() {
  // console.log(props)
  // const { items } = this.props;
  return(
  <div id='userDashboard'>
    <h3>Items you won</h3>
    <ul>
      <li>this</li>
      <li>this</li>
      <li>this</li>
      <li>this</li>
      <li>this</li>
      <li>this</li>
    </ul>

  </div>

  )
  }
}

export default UserDashboard;
