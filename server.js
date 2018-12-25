const express = require('express');
const http = require('http');
const logger         = require('morgan');
const socketIo = require('socket.io');
const itemRouter = require('./routes/itemRouter');
const bodyParser     = require('body-parser');

const app = express();
const server = http.createServer(app)
const io = socketIo(server)

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/items', itemRouter);
app.use(express.static('public'));

let bidLedger = [{body: 1, from:'default'}];


timers = []


io.on('connection', socket => {
  console.log(`socket works dude at ${socket.id}`)

  socket.on('addItem', function(){
      console.log('added item!')
      io.emit('addItem')
  })

  socket.on('message', function(data){
    data.from = socket.id
    if(data.body == 'bidup'){
      data = bidLedger[bidLedger.length-1].bid + 1
      bidLedger.push(data);
      console.log(bidLedger)
      let latestBid = bidLedger[bidLedger.length-1]
      io.emit('message',latestBid);
    } else {
    //   console.log(`new bid: ${data.bid}`)
    // console.log(`last valid bid: ${bidLedger[bidLedger.length-1].bid}`)
    // console.log(data.bid > bidLedger[bidLedger.length-1].bid)

    //only add bid to bid ledger if it is valid
       data.body = parseInt(data.body)
      if(data.body > bidLedger[bidLedger.length-1].body){
        bidLedger.push(data);
        console.log(bidLedger)
        let latestBid = bidLedger[bidLedger.length-1]
        io.emit('message',latestBid);
      }
    }
  })

  socket.on('timer', function(data){

let timer = data
    const startTimer = function(){

      if(timer > 0){
        timer --
        io.emit('timer',timer)
      } else {
        ids.forEach(function(el){
        clearInterval(el)
       console.log('ok cleared timer')
       bidLedger = [{body: 1, from:'default'}];
  })
        io.emit('timer', 'Time is up!')
      }

    }

let grandFunction = function(){
    ids.forEach(function(el){
    clearInterval(el)
      console.log('ok cleared em')
  })

  io.emit('timer', 6)
  timer = 6
  let timerID = setInterval(startTimer, 1000)
  ids.push(timerID)
  console.log(ids)
}
grandFunction();
    })

})


let ids = []
let port = process.env.PORT || 3000


server.listen(port)
