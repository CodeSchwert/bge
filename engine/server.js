import http from 'http';
import socketio from 'socket.io';
import app from './app';

const server = http.createServer(app);
const io = socketio(server);

server.listen(() => {
  console.log(`Engine server listening on port ${PORT}`);
});
