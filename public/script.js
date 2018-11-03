//connect to sockets.io

const socket = io.connect('http://localhost:3000');

//query dom
const message = document.getElementById('message');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');

// emit event

btn.addEventListener('click', function(){
  socket.emit('chat',{
    message: message.value,
    handle: handle.value
  })
})

//listen for events
socket.on('chat',function(data){
  output.innerHTML += `<p>${data.handle}: ${data.message}</p>`
})
