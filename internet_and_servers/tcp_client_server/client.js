const net = require("net");
const socket = net.Socket();

socket.on("data", (data) => {
  console.log(`Server said: ${data}`);

  if (data.toString().includes("Bhagwant")) {
    // To terminate a connection between a server
    // and a client, use the .end(); method on socket
    socket.end();
  }
});

socket.connect(5000, "127.0.0.1", () => {
  console.log("----Client Connected----");

  // To send data through socket connection,
  // use the method socket.write(<data>) with one
  // argument which the object holding our data.
  socket.write(process.argv[2]);
});