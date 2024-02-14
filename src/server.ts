import express, { Express } from 'express';
import { createServer, Server as HttpServer } from 'http';
import { Server as IOServer, Socket } from 'socket.io';

// Initialize the Express app
const app: Express = express();
// Create an HTTP server
const httpServer: HttpServer = createServer(app);
// Initialize Socket.IO on the HTTP server
const io: IOServer = new IOServer(httpServer, {
  cors: {
    origin: "*", // Allow all origins
  },
});

// Listen for new connections
io.on('connection', (socket: Socket) => {
  console.log('a user connected');

  // Listen for disconnections
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Start the HTTP server
httpServer.listen(3000, () => {
  console.log('listening on *:3000');
});