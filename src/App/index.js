import React, { Component } from 'react';
import { hot }      from 'react-hot-loader';
// import "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.js"
// import 'socket.io'
// import './script.js';
import './styles.css';
import AjaxAdapter from '../AjaxAdapter';

import BidDashboard from '../BidDashboard';
import AvailableItems from '../AvailableItems';
const ItemDataModel = AjaxAdapter('/api/items');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
    }
  }

    componentDidMount() {
    this.getData();
  }

  async getData() {
    this.setState({
      items: await ItemDataModel.read(),
    });
  }

render() {
  const { items } = this.state;
  console.log(items)
  // const { items } = this.props;
  return(
    <div>
      <BidDashboard />
      <AvailableItems items = {items} />
    </div>
)
}
}
export default App;
