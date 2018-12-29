import React, { Component } from 'react';
import io from 'socket.io-client'

// shoutout to Fabian Schultz on stackoverflow for helping with the timer
// https://stackoverflow.com/questions/40885923/countdown-timer-in-react

class BidDashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      messages: [],
      seconds: 6,
    }
    this.startTimer = this.startTimer.bind(this);
  }

  componentDidMount() {
    console.log('yes comp did mount on dashboard')
    this.socket = io.connect('/');

    this.socket.on('message', message => {
        this.setState({ messages: [message, ...this.state.messages] })
    })

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
      .then(this.props.updateBalance())
      .then(this.setState({
        messages: [],
        seconds: 6
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
if (event.keyCode === 13 && !(body < this.state.messages[0].body) ){
  console.log("new bid: "+body)
  console.log("old bid: "+this.state.messages[0].body)
  console.log("all the bids:"+this.state.messages)
  let message = {
    body: body,
    from: 'eyy'
  }
  this.socket.emit('message', message)
  event.target.value = message.body +1
  this.startTimer()
    }
 }

render() {

let {
items,
completedBidFn,
filterFn,
updateBalance
} = this.props

let {
  messages,
  seconds
} = this.state

let ledger = "Bids will go here"
if (messages.length > 1){
  ledger = messages.map((message,index) => {
        return <li key={index}> {message.from} - ${message.body}</li>
      })
}

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
        <input type='number' onKeyUp={
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
