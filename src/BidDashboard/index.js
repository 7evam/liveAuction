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
      messages: [{body:0}],
      seconds: 6,
    }
    this.startTimer = this.startTimer.bind(this);
    //this.countDown = this.countDown.bind(this)
  }

 // secondsToTime(secs){
 //    let hours = Math.floor(secs / (60 * 60));

 //    let divisor_for_minutes = secs % (60 * 60);
 //    let minutes = Math.floor(divisor_for_minutes / 60);

 //    let divisor_for_seconds = divisor_for_minutes % 60;
 //    let seconds = Math.ceil(divisor_for_seconds);

 //    let obj = {
 //      "h": hours,
 //      "m": minutes,
 //      "s": seconds
 //    };
 //    return obj;
 //  }

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

  //  countDown() {
  //   // Remove one second, set state so a re-render happens.
  //   let seconds = this.state.seconds - 1;
  //   this.setState({
  //     seconds: seconds,
  //   });

  //   // Check if we're at zero.
  //   if (seconds == 0) {
  //     clearInterval(this.timer);
  //   }
  // }

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



// function bidUp(){
//   console.log('this works')
//       socket.emit('message',{
//         body: 'bidup',
//         from: 'OMG',
//       })
//     }

render() {
  // console.log(props)
  // const { items } = this.props;
let messages = this.state.messages.map((message,index) => {
        return <li key={index}> {message.from}: {message.body}</li>
      })
  return(
  <div id="funChat">
  <div>
          <button onClick={this.startTimer}>Start</button>
        s: {this.state.seconds}
      </div>
   <div id="chat-window">
    <div id="countdown">
  <div id="countdown-number"></div>
  <svg>
    <circle r="18" cx="20" cy="20"></circle>
  </svg>
</div>
      <div className = 'bidInfo'>
        <input type='number' onKeyUp={this.handleSubmit} />
          {messages}
       Current Item: <span id='currentItem'></span><br />
       Current Bid: <span id='highBid'></span><br />
       Highest Bidder: <span id='highBidder'></span>
      </div>
      <div id="output"></div>
   </div>
  </div>
  )
  }
}
export default BidDashboard;

//<button onClick={this.startTimer}>Start</button>
