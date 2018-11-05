//connect to sockets.io

const socket = io.connect('/');

//query dom
const bid = document.getElementById('bid');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const bidup = document.getElementById('bidup');
highBid = document.getElementById('highBid');
highBidder = document.getElementById('highBidder');

// emit event

btn.addEventListener('click', function(){
  socket.emit('chat',{
    bid: bid.value,
    handle: socket.id
  })
})

bidup.addEventListener('click',function(){
  socket.emit('chat',{
    bid: 'bidup',
    handle: socket.id
  })
})

//listen for events
socket.on('chat',function(data){
  console.log(data)
  highBid.innerHTML = `${data.bid}`
  highBidder.innerHTML = `${data.handle}`
})
