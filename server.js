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

let bidLedger = [{bid: 1, handle:'default'}];

io.on('connection', socket => {
  console.log(`connected on ${socket.id}`)
  socket.on('message', body => {
    socket.broadcast.emit('message', {
      body,
      from: socket.id.slice(8)
    })
  })
})

server.listen(3000)
