import React, { Component } from 'react';

// import "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.js"
// import './socketioScript.js'
// import './script.js';
import './styles.css';
import AjaxAdapter from '../AjaxAdapter';

import BidDashboard from '../BidDashboard';
import UserDashboard from '../UserDashboard';
import AvailableItems from '../AvailableItems';
import io from 'socket.io-client'


const ItemDataModel = AjaxAdapter('/api/items');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      messages: [],
    }
  }

    componentDidMount() {
      console.log('yes comp did mount')
      this.getData();
      this.socket = io.connect('/');
      this.socket.on('message', message => {
        this.setState({ messages: [message, ...this.state.messages] })
      })
    }

  async getData() {
    this.setState({
      items: await ItemDataModel.read(),
    });
  }

  handleSubmit = event => {
    let body = event.target.value

    if (event.keyCode === 13 && body){
     let message = {
       body: parseInt(body),
       from: 'eyy'
    }
    //console.log(`HERES WHATS COMING IN ${message.body}`)
    //console.log(`HERES WHAT ITS COMPARED TO ${this.state.messages[0].body}`)
    //this.setState({ messages: [message, ...this.state.messages] })
     this.socket.emit('message', message)
     event.target.value = ''

    }
  }

  render() {
    let { items } = this.state
    //console.log(items)
    // const { items } = this.props;
    return(
      <div>
        <BidDashboard />
        <UserDashboard />
        <AvailableItems items = {items} />
        <div>

        </div>
      </div>
    )
  }
}
export default App;
