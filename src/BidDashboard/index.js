
import React, { Component } from 'react';
import io from 'socket.io-client'

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
        if(this.state.seconds == 'Time is up!'){
          let price = this.state.messages[0].body
          console.log(price)
          this.props.updateBalance(price)
          this.setState({
            messages: [{body:0, from:'bid'}],
            seconds: 6
          })
          this.props.resetPrice()
        }
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




let price = this.state.messages[0].body
bidID = bidID[0]

// console.log(bidID)

let counter = 0

if(this.state.seconds == 'Time is up!') {
    completedBidFn(bidID,price)
    if(counter > 1){
      updateBalance(price)
      counter += 1
    }
}



  return(
  <div id="funChat">

  <div>


      </div>
   <div id="chat-window">
     <div>For Auction:{bidItem}</div>
    <div id="countdown">
    Time left: {this.state.seconds}
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
      <div id="output"></div>
   </div>
  </div>
  )
  }
}
export default BidDashboard;
//<button onClick={this.startTimer}>Start</button>
