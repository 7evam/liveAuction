//connect to sockets.io

const socket = io.connect('http://localhost:3000');

//query dom
const bid = document.getElementById('bid');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const bidup = document.getElementById('bidup');

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
  output.innerHTML = `<p>${data[data.length-1].handle}: ${data[data.length-1].bid}</p>`
})
