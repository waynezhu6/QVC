//the entry point for the server
export {};

const express = require('express');
const http = require('http');
const cors = require('cors');
const path = require('path');
const socketIO = require('socket.io');
const {Connections} = require('./lib/connections');

const app = express();
const server = http.createServer(app);
app.use(cors())

app.use(express.static("client/build"));
app.get('/', (req: any, res: any) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

const io = socketIO.listen(server);

io.on('connection', (socket: any) => {


  socket.on('disconnect', (e: any) => {
    connection.leaveRoom(socket.id);
  });

  socket.on('pause', (data: {id: string, currentTime: number}) => {
    let rooms = Object.values(socket.rooms);
    for(const room of rooms){
      if(room != socket.id){
        io.to(room).emit('pause', data);
      }
    }
  });

  socket.on('play', (data: {id: string, currentTime: number}) => {
    let rooms = Object.values(socket.rooms);
    for(const room of rooms){
      if(room != socket.id){
        io.to(room).emit('play', data);
      }
    }
  });

  // socket.on('requestRoom', (data) => {
  //   let result = connection.requestRoom(data.room);
  //   io.to(socket.id).emit('requestRoom', {result});
  // });

  socket.on('createRoom', (data: {room: string, password: string, username: string}) => {
    let result = connection.createRoom(data.room, data.password, data.username, socket.id);
    if(result){
      socket.join(data.room);
    }

    io.to(socket.id).emit('createRoom', {result});
  });

  socket.on('joinRoom', (data: {room: string, password: string, username: string}) => {
    let result = connection.joinRoom(data.room, data.password, data.username, socket.id);
    if(result)
      socket.join(data.room);

    io.to(socket.id).emit('joinRoom', {result});
  });

});

let connection = new Connections();
