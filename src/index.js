import http from 'http';
import socketio from 'socket.io';
import app from './server/app';

const PORT = 5000;

const server = http.createServer(app);
const io = socketio(server);

server.listen(PORT, () => {
  console.log(`Engine server listening on port ${PORT}`);
});
