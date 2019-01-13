import React, { Component, Fragment } from 'react';
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
      let bidInput = document.querySelector('.bid-input')
      bidInput.style.color = 'black'
      this.props.completedBidFn(bidID)
      .then(this.setState({
        bids: [],
        seconds: 6,
        value: 0,
      }))
    }
  }
  startTimer() {
    this.setState({ seconds: 6 })
    this.socket.emit('timer', 6)
  }

handleSubmit = event => {
let body = parseInt(event.target.value)
let bids = this.state.bids
if(body>= this.props.user.balance){
  event.target.style.color='red'
} else {
  event.target.style.color='black'
}
if(event.keyCode === 13 && body>=this.props.user.balance){
  alert("you don't have that much money")
  return
}
else if (event.keyCode === 13 && !(body < bids[0].body) ){
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
} = this.props

let {
  bids,
  seconds
} = this.state



  let ledger = bids.map((bid,index) => {
        return <li key={index}> {bid.from} - ${bid.body}</li>
  })


let bidItem = items.filter(filterFn).map((item,index) => {
    return <Fragment><h3 className="itemForBidName" key={index}> {item.name} </h3><img className="itemImage" src={item.image}/></Fragment>
  })

  return(
  <div id="bidDashboard">
  {bids[0] ? (
   <div id="chat-window">
     <div>{bidItem}</div>
       {bids[0] ? (
        <div>High bid: {bids[0].from} - ${bids[0].body}</div>
        ) : (
        <Fragment />
        )}
      <div className = 'bidInfo'>
      <button onClick={this.bidPlusOne}>Bid +1</button> or
        <input className='bid-input' type='number' value={this.state.value} onChange={this.handleChange} onKeyUp={
          bidItem.length > 0 ?
          this.handleSubmit :
          undefined
        } />
      </div>
      <div class="countdownAndOutput">
      <div id="countdown">
        Time left: {seconds} seconds
      </div>
      <div id="output">
      {ledger}
      </div>
   </div>
   </div>
    ) : (
    <div><p>Choose an item below for auction</p><hr/></div>
    )}

  </div>
  )
  }
}
export default BidDashboard;
