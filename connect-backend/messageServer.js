const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', socket => {
    console.log('New WS Connection...');

    socket.on('chatMessage', ({ sender, receiver, message }) => {
        io.to(receiver).emit('message', { sender, message });
    });

    socket.on('disconnect', () => {
        console.log('User has left');
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
