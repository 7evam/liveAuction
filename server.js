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
timers = []

io.on('connection', socket => {
  console.log(`socket works dude at ${socket.id}`)

  socket.on('update', function(){
      console.log('updated!')
      io.emit('update')
  })

  socket.on('message', function(data){
    //assign the socket id as the 'from' of the data
    data.from = socket.id
    if(data.body == 'bidup'){
      data = bidLedger[bidLedger.length-1].bid + 1
      bidLedger.push(data);
      console.log(bidLedger)
      let latestBid = bidLedger[bidLedger.length-1]
      io.emit('message',latestBid);
    } else if(
        bidLedger.length == 0 ?
        true:
        data.body > bidLedger[bidLedger.length-1].body
        ){
        bidLedger.push(data);
        let latestBid = bidLedger[bidLedger.length-1]
        io.emit('message',latestBid);
        io.emit('latestBid',latestBid.body);
      }
  })

  // socket.on('newConnection', function(bidLedger){
  //   console.log('we got a new connection, heres the bid ledger: '+ bidLedger)
  //   io.emit('bidLedger', bidLedger)
  // })

  socket.on('timer', function(data){

let timer = data
    const startTimer = function(){

      if(timer > 0){
        timer --
        io.emit('timer',timer)
      } else {
        ids.forEach(function(el){
        clearInterval(el)
       bidLedger = [{body: 1, from:'default'}];
  })
        io.emit('timer', 'Time is up!')
      }

    }

let grandFunction = function(){
    ids.forEach(function(el){
    clearInterval(el)
  })

  io.emit('timer', 6)
  timer = 6
  let timerID = setInterval(startTimer, 1000)
  ids.push(timerID)
}
grandFunction();
    })
})

let ids = []
let port = process.env.PORT || 3000

server.listen(port)
