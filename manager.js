const readline = require('readline');
const io = require('socket.io-client');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const socket = io('http://localhost:3000');

// Notify the server that a manager has connected
socket.emit('manager-connect');

console.log('Manager connected. Type your messages and press Enter to send.');

// socket.on('message', (data) => {
//     console.log(`Received message: ${data}`);
// });

rl.on('line', (input) => {
    if (input.trim() !== '') {
        socket.emit('message', `Manager: ${input}`);
    }
});

// Handle manager disconnection when the process is terminated
process.on('exit', () => {
    socket.emit('manager-disconnect');
    console.log('Manager disconnected');
});