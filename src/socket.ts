import { Server } from "socket.io";

declare global {
  var __socketIo: Server | undefined;
}

export function initSocket(server: any): Server {
  let io: Server;
  if (globalThis.__socketIo) {
    io = globalThis.__socketIo;
  } else {
    io = new Server(server);
    io.on("connection", (socket) => {
      console.log("Client connected");
    });
    globalThis.__socketIo = io;
  }
  return io;
}

export function getIO(): Server {
  if (!globalThis.__socketIo) {
    throw new Error("Socket.io not initialized.");
  }
  return globalThis.__socketIo;
}
