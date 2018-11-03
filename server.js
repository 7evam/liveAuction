const express = require('express');
const socket = require('socket.io');

const app = express();
const server = app.listen(3000,function(){
  console.log('eyy')
})

app.use(express.static('public'));

const io = socket(server);

io.on('connection',function(socket){
  console.log(`socket works dude at ${socket.id}`)

  socket.on('chat', function(data){
    io.emit('chat',data);
  })
})
