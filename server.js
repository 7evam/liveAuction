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

// io.on('connection', socket => {
//   console.log(`connected on ${socket.id}`)
//   socket.on('message', body => {
//     socket.broadcast.emit('message', {
//       body,
//       from: socket.id
//     })
//   })
// })

io.on('connection', socket => {
  console.log(`socket works dude at ${socket.id}`)

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

    const timerInterval = setInterval(timerFunction,1000)

    function stopTimer(){
          clearInterval(timerInterval)
        }

        timerFunction();


        console.log(timer)

        function timerFunction(){
          // console.log(timer)
          if(timer>0){
            timer--
            console.log(timer)
            //io.emit('timer',timer)
          } else {
            stopTimer()
            console.log('its over')
          }
        }
    })

})


server.listen(3000)
