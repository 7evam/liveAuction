import React, { Component } from 'react';
import io from 'socket.io-client'

import UserAjaxAdapter from '../UserAjaxAdapter';
const UserDataModel = UserAjaxAdapter('/api/users/2');

class UserDashboard extends Component{
    constructor(props){
    super(props);
    this.state = {
      user: {},
    }
  }

    componentDidMount() {
      this.getUserData();
    }

componentWillReceiveProps() {
  let price = this.props.price
  // let availableBalance = this.state.availableBalance - price
  // this.setState({
  //   availableBalance:availableBalance
  // })
}

 async getUserData() {
    console.log('getting user data')
    this.setState({
      user: await UserDataModel.read(),
    });
  }

render() {


let items = this.props.items
let filterFn = this.props.filterFn
let userBalance = this.state.user.balance

  return(
  <div id='userDashboard'>
  <div>Welcome {this.state.user.username}</div>
  <div>Available balance: ${this.state.user.balance}</div>
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
