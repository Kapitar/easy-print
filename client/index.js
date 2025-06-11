import { printFile } from "node-cups";
import { join } from "path";
import { writeFile } from "fs/promises";
import { io } from "socket.io-client";

const ioClient = io("http://localhost:3000");

ioClient.on("connect", () => {
  console.log("Connected to server");
});

ioClient.on("disconnect", () => {
  console.log("Disconnected from server");
});

ioClient.on("print", async (data) => {
  const uploadDir = join(process.cwd(), "files", data.fileName);
  console.log(uploadDir);
  await writeFile(uploadDir, data.buffer);

  try {
    const params = {
      printer: data.printerName,
      copies: 1,
      printerOptions: {
        media: "A4",
      },
    };
    const result = await printFile(uploadDir, params);
    
  } catch (error) {
    console.error("Print error:", error);
  }
});
