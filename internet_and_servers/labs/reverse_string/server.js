// import 'net' from node
// 'net' will be used to create server instance
const net = require("net");

// create a server
const server = net.createServer(
  // the net.createServer function requires one parameter: a callback function
  // that callback function requires one parameter: 'socket'
  (socket) => {
    // socket.on is a function that requires two parameters:
    //  - event type (in this case "data")
    //  - a callback function
    //      that callback function requires on parameter: 'data' which is the data
    //       received from the client
    //      the callback function is called once data is received by the server
    //      and the data that comes in from the client is passed as the 'data'
    //      parameter to the callback
    socket.on("data", (data) => {
      // 'data' doesn't necessarily come in as a string. It is a series of
      //  binary data bytes in a buffer.
      //  (for more information on buffers: https://en.wikipedia.org/wiki/Data_buffer)
      // The data buffer needs to be converted into a string before it can be
      // manipulated by our server
      // data + "" converts those bytes into a string implicitly
      // equivalent to: `${data}
      let request = data + ""; // request = data.toString();
      //log the data received from the client for debugging purposes
      console.log("Data received from client: ", request);
      // reverse our string and store the result in the 'response' variable
      let response = request.split("").reverse().join("");
      // log the response to be sent to client for debugging purposes
      console.log("Response to be sent to client: ", response);
      // socket.write is a function that sends data to a connected client;
      // socket.write requires one parameter: the data to send back to the client
      socket.write(response);
    });
  }
);

// this starts the server listening for requests on port 8000
server.listen(8000);
console.log("Server listening on port 8000");