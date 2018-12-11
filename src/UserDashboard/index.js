import React, { Component } from 'react';
import io from 'socket.io-client'

class UserDashboard extends Component{
    constructor(props){
    super(props);
    this.state = {
      availableBalance: 150,
    }
  }

// componentDidMount() {

// }

componentWillReceiveProps() {
  let price = this.props.price
  let availableBalance = this.state.availableBalance - price
  this.setState({
    availableBalance:availableBalance
  })
}

render() {


let items = this.props.items
let filterFn = this.props.filterFn
let availableBalance = this.state.availableBalance

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
}

export default UserDashboard;
