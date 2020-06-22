// The 'net' module is a part of Node. It si used for creating
// and communicating with TCP servers.
const net = require("net");

const server = net.createServer((socket) => {
  // This callback will be called whenever a client
  //  request a connection from this server program.

  // It will be called once per client or once per connection.

  // The first argument passed to this callback is a
  // "socket" object. It represents the connection. It has
  // to send an receive data, to close the connection,
  // to check for errors, etc.
  console.log("-----Opened a connection------");

  // socket.on(<socket-event>, <callback>)
  // this method is called an event listener. We can
  // use it to react to things that happen on
  // our server's connection, the sockets, such
  // as receiving data
  socket.on("data", (data) => {
    console.log("Server got: ", data.toString());

    socket.write(`Hello, ${data.toString()}`);
  });

  socket.on("end", () => {
    console.log("-----connection closed----");
  });
});

const PORT = 5000;
const ADDRESS = "127.0.0.1";

server.listen(PORT, ADDRESS, () => {
  console.log(`Server is listenning at ${ADDRESS}:${PORT}`);
});