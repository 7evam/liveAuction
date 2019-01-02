const express = require('express');
const http = require('http');
const logger         = require('morgan');
const socketIo = require('socket.io');
const itemRouter = require('./routes/itemRouter');
const userRouter = require('./routes/userRouter');
const bodyParser     = require('body-parser');

const app = express();
const server = http.createServer(app)
const io = socketIo(server)

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/items', itemRouter);
app.use('/api/users', userRouter);
app.use(express.static('public'));

let bidLedger = [];
let ids = [];

io.on('connection', socket => {

  socket.on('reset', function(){
    io.emit('update')
  })

  socket.on('update', function(){
      io.emit('update')
  })

  socket.on('load', function(){
      io.emit('load', bidLedger)
  })

  socket.on('bid', function(data){
    if(
      bidLedger.length === 0 ?
      // if there haven't been any bids yet
      true:
      // OR if there have been bids, the new bid is greater than the current high bid
      data.body > bidLedger[bidLedger.length-1].body
    ){
      // add the bid to the ledger which lives on the server
      // outside of this socket connection
      bidLedger.push(data);
      io.emit('bidLedger', bidLedger);
      io.emit('latestBid',bidLedger[bidLedger.length-1].body);
    }

    // data.from = socket.id
    // if(data.body == 'bidup'){
    //   data = bidLedger[bidLedger.length-1].bid + 1
    //   bidLedger.push(data);
    //   console.log(bidLedger)
    //   let latestBid = bidLedger[bidLedger.length-1]
    //   io.emit('message',latestBid);
    // } else if(
    //     bidLedger.length === 0 ?
    //     true:
    //     data.body > bidLedger[bidLedger.length-1].body
    //     ){
    //     bidLedger.push(data);
    //     let latestBid = bidLedger[bidLedger.length-1]
    //     io.emit('message',latestBid);
    //     io.emit('latestBid',latestBid.body);
    //     // io.emit('bidLedger', bidLedger);
    //   }
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
        bidLedger = [];
      })
        io.emit('timer', 'Time is up!')
      }
    }

  const clearFunction = function(){
    ids.forEach(function(el){
      clearInterval(el)
    })
    io.emit('timer', 6)
    timer = 6
    let timerID = setInterval(startTimer, 1000)
    ids.push(timerID)
  }
  clearFunction();
  })
})

let port = process.env.PORT || 3000

server.listen(port)
