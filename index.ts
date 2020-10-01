//the entry point for the server
export {};

const express = require('express');
const https = require('https');
const fs = require('fs');
const socketIO = require('socket.io');
const {Connections} = require('./lib/connections');

const app = express();
const server = https.createServer({
  key: fs.readFileSync('/etc/ssl/certs/key.pem'),
  cert: fs.readFileSync('/etc/ssl/certs/certificate.pem')
}, app);

app.use(express.static("client/build"));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
const io = socketIO(server);

io.on('connection', (socket: any) => {

  socket.on('pause', (data: {id: string, currentTime: number}) => {
    let rooms = Object.values(socket.rooms);
    for(const room of rooms){
      if(room != socket.id)
        io.to(room).emit('pause', data);
    }
  });

  socket.on('play', (data: {id: string, currentTime: number}) => {
    let rooms = Object.values(socket.rooms);
    for(const room of rooms){
      if(room != socket.id)
        io.to(room).emit('play', data);
    }
  });

  // socket.on('requestRoom', (data) => {
  //   let result = connection.requestRoom(data.room);
  //   io.to(socket.id).emit('requestRoom', {result});
  // });

  socket.on('createRoom', (data: {room: string, password: string, username: string, id: string}) => {
    let result = connection.createRoom(data.room, data.password, data.username, data.id);
    //console.log(data.room);
    if(result){
      socket.join(data.room, () => {console.log('socket now in rooms', socket.rooms)});
      // console.log(data.room);
      // console.log(socket.rooms);
    }
    io.to(socket.id).emit('createRoom', {result});
  });

  socket.on('joinRoom', (data: {room: string, password: string, username: string, id: string}) => {
    let result = connection.joinRoom(data.room, data.password, data.username, data.id);
    //console.log(data.room);
    if(result)
      socket.join(data.room);
    io.to(socket.id).emit('joinRoom', {result});
  });

});

let connection = new Connections();