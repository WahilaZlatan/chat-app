const path = require('path');
const socketIO = require('socket.io');
const http = require('http');
const express = require('express');
const publicPath = path.join(__dirname, '../public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket)=>{
  console.log('new user connected');

  socket.on('disconnect', ()=>{
    console.log('User was Disconnected from server');
  })
});

server.listen(3000, ()=>{
  console.log('Server is up on port 3000');
})
