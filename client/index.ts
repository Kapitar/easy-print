import { printBuffer } from "node-cups";

const io = require("socket.io-client"),
  ioClient = io.connect("http://localhost:3000");

ioClient.on("connect", () => {
  console.log("Connected to server");
});

ioClient.on("disconnect", () => {
  console.log("Disconnected from server");
});

ioClient.on("print", async (data: any) => {
  const buffer = data.buffer;
  const params = {
    printer: data.printerName,
    copies: 1,
    printerOptions: {
      media: "A4",
    },
  };
  const result = await printBuffer(buffer, params);
  console.log(result);
});
