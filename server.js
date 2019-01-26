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
      data.body > bidLedger[0].body
    ){
      // add the bid to the ledger which lives on the server
      // outside of this socket connection
      bidLedger.unshift(data);
      io.emit('bidLedger', bidLedger);
      io.emit('latestBid',bidLedger[0]);
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
