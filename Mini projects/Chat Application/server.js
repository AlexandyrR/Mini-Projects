//Install -> npm install socket.io
//Then you run it with node server.js
const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', socket => {
    console.log('New user connected');

    socket.on('chatMessage', message => {
        io.emit('message', message);
    });

    io.emit('userCount', io.engine.clientsCount);

    socket.on('disconnect', () => {
        console.log('User disconnected');
        io.emit('userCount', io.engine.clientsCount);
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
