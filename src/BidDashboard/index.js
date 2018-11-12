import React, { Component } from 'react';
import io from 'socket.io-client'
import './styles.css';

// shoutout to Fabian Schultz on stackoverflow for helping with the timer
// https://stackoverflow.com/questions/40885923/countdown-timer-in-react

class BidDashboard extends Component {

    constructor(props){
    super(props);
    this.state = {
      items: [],
      messages: [{body:0, from:'bid'}],
      seconds: 6,
    }
    this.startTimer = this.startTimer.bind(this);
    //this.countDown = this.countDown.bind(this)
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

    startTimer() {
      this.setState({ seconds: 6 })
      this.socket.emit('timer', 6)
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
     event.target.value = message.body +1
    this.startTimer()
    }
  }

render() {
const completedBidFn = this.props.completedBidFn


  // console.log(props)
  // const { items } = this.props;
let ledger = this.state.messages.map((message,index) => {
        return <li key={index}> {message.from} - ${message.body}</li>
      })

let bidItem = this.props.items.filter(item => item.upForAuction && !item.completedBid).map((item,index) => {
    return <h3 key={index}> {item.name} </h3>
  })

let bidID = this.props.items.filter(item => item.upForAuction && !item.completedBid).map((item,index) => {
    return item.id
  })
bidID = bidID[0]
let price = this.state.messages[0].body
// console.log(bidID)

if(this.state.seconds == 0) {
    completedBidFn(bidID,price)
    console.log(this.state.messages[0].body)
    console.log(this.state.messages[0].from)
}

  return(
  <div id="funChat">

  <div>


      </div>
   <div id="chat-window">
     <div>For Auction:{bidItem}</div>
    <div id="countdown">
    {this.state.seconds}
</div>
      <div className = 'bidInfo'>
        <input type='number' onKeyUp={this.handleSubmit} />
        {ledger}
      </div>
      <div id="output"></div>
   </div>
  </div>
  )
  }
}
export default BidDashboard;

//<button onClick={this.startTimer}>Start</button>
