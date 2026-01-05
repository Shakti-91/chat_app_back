import { WebSocket, WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
let allSocket = [];
wss.on('connection', (socket) => {
    allSocket.push(socket);
    console.log('Client connected');
    socket.on('message', (data) => {
        const message = data.toString();
        console.log(message);
        allSocket.forEach((s) => {
            if (s !== socket && s.readyState === s.OPEN) {
                s.send(message);
            }
        });
    });
    socket.on('close', () => {
        allSocket = allSocket.filter((s) => s !== socket);
        console.log('Client disconnected');
    });
});
//# sourceMappingURL=index.js.map