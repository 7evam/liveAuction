const express = require('express');
const socket = require('socket.io');
const itemRouter = require('./routes/itemRouter');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const server = app.listen(3000,function(){
  console.log('eyy')
})

app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

const io = socket(server);

app.use('/', itemRouter);

io.on('connection',function(socket){
  console.log(`socket works dude at ${socket.id}`)

const bidLedger = [{bid: 1, handle:'default'}];

  socket.on('chat', function(data){
    if(data.bid == 'bidup'){
      data.bid = bidLedger[bidLedger.length-1].bid + 1
      bidLedger.push(data);
    } else {
    //   console.log(`new bid: ${data.bid}`)
    // console.log(`last valid bid: ${bidLedger[bidLedger.length-1].bid}`)
    // console.log(data.bid > bidLedger[bidLedger.length-1].bid)

    //only add bid to bid ledger if it is valid
       data.bid = parseInt(data.bid)
      if(data.bid > bidLedger[bidLedger.length-1].bid){
        bidLedger.push(data);
      }
    }
    console.log(bidLedger)
    let latestBid = bidLedger[bidLedger.length-1]
    io.emit('chat',latestBid);
  })
})
