const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origin: ['http://localhost:3000', 'http://localhost:3001'],
        methods: ['GET', 'POST'],
    },
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chat message', (message) => {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] Message received from ${socket.handshake.headers.origin}:`, message);
        io.emit('chat message', message);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

const PORT = 8080;
http.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
