const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        // Handle signaling messages
    });
});

server.listen(8080, () => {
    console.log('Signaling server running on port 8080');
});
