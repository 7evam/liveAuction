import React, { Component } from 'react';
import io from 'socket.io-client'

// shoutout to Fabian Schultz on stackoverflow for helping with the timer
// https://stackoverflow.com/questions/40885923/countdown-timer-in-react

class BidDashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      bids: [],
      seconds: 6,
      value: 0,
    }
    this.startTimer = this.startTimer.bind(this);
    this.bidPlusOne = this.bidPlusOne.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log('yes comp did mount on dashboard')
    this.socket = io.connect('/');

    // tell server component has mounted
    this.socket.emit('load')

    // get bid ledger from server on load
    this.socket.on('load', bidLedger => {
      this.setState({
        bids: bidLedger
      })
    })

    // get bid ledger from server after a new bid
    this.socket.on('bidLedger', bidLedger => {
      this.setState({
        bids: bidLedger,
        value: bidLedger[0].body+1
      })
      this.startTimer();
    })

    // when timer changes on server, update on client
    this.socket.on('timer', seconds => {
      this.setState({ seconds: seconds });
    })
  }

  componentDidUpdate() {
    let bidID = this.props.items.filter(item => item.upForAuction && !item.completedBid).map((item,index) => {
      return item.id
    })
    bidID = bidID[0]
    if(this.state.seconds == 'Time is up!'){
      this.props.completedBidFn(bidID)
      .then(this.props.updateUserBalance())
      .then(this.setState({
        bids: [],
        seconds: 6,
        value: 0,
      }))
      .then(this.props.resetPrice())
    }
  }

  startTimer() {
    this.setState({ seconds: 6 })
    this.socket.emit('timer', 6)
  }

handleSubmit = event => {
let body = parseInt(event.target.value)
let bids = this.state.bids
if (event.keyCode === 13 && !(body < bids[0].body) ){
  let bid = {
    body: body,
    from: this.props.user.username
  }
  this.socket.emit('bid', bid)
  this.startTimer()
    }
 }

 bidPlusOne(){
  let bids = this.state.bids
  let bid = {
    body: bids[0].body + 1,
    from: this.props.user.username
  }
  this.socket.emit('bid', bid);
  this.startTimer();
 }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

render() {

let {
items,
completedBidFn,
filterFn,
updateUserBalance
} = this.props

let {
  bids,
  seconds
} = this.state



  let ledger = bids.map((bid,index) => {
        return <li key={index}> {bid.from} - ${bid.body}</li>
  })


let bidItem = items.filter(filterFn).map((item,index) => {
    return <h3 key={index}> {item.name} </h3>
  })

  return(
  <div id="funChat">
  <div>
  </div>
   <div id="chat-window">
     <div>For Auction:{bidItem}</div>
      <div id="countdown">
        Time left: {seconds}
      </div>

      <div className = 'bidInfo'>
      Bid here:
      <button onClick={this.bidPlusOne}>Bid +1</button>
        <input type='number' value={this.state.value} onChange={this.handleChange} onKeyUp={
          bidItem.length > 0 ?
          this.handleSubmit :
          undefined
        } />
        {ledger}
      </div>

      <div id="output">
      </div>
   </div>
  </div>
  )
  }
}
export default BidDashboard;
