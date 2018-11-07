import React, { Component } from 'react';

// import "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.js"
// import './socketioScript.js'
// import './script.js';
import './styles.css';
import AjaxAdapter from '../AjaxAdapter';

import BidDashboard from '../BidDashboard';
import AvailableItems from '../AvailableItems';
import { subscribeToTimer } from '../api';
import io from 'socket.io-client'


const ItemDataModel = AjaxAdapter('/api/items');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      bids: [],
    }
  }

    componentDidMount() {
      console.log('yes comp did mount')
      this.getData();
      this.socket = io.connect('/');
      this.socket.on('bid', bid => {
        this.setState({ bids: [bids, ...this.state.bids] })
      })
    }

  async getData() {
    this.setState({
      items: await ItemDataModel.read(),
    });
  }

  handleSubmit = event => {
    const body = event.target.value
    if (event.keyCode === 13 && body){
      let bid = {
        body: body,
        from: 'me'
     }
     this.setState({ bids: [bid, ...this.state.bids] })
     this.socket.emit('bid', body)
     event.target.value = ''
    }
  }

  render() {
    let { items } = this.state
    let bids = this.state.bids.map((bid,index) => {
        return <li key={index}> {bid.from}: {bid.body}</li>
      })
    //console.log(items)
    // const { items } = this.props;
    return(
      <div>
        <BidDashboard />
        <AvailableItems items = {items} />
        <div>
          <h1>Hello World</h1>
          <input type='text' placeholder='enter a message' onKeyUp={this.handleSubmit} />
          {bids}
        </div>
      </div>
    )
  }
}
export default App;
