// import 'net' from node
// 'net' will be used to create a socket for your client to send requests to
// your server

const net = require("net");
// import 'readline' from node
// 'readline'  will be used to take user inpu data from commandline
const readline = require("readline");

// this is the setup required to read input from the commandline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create a client socket
const client = new net.Socket();

// when the client receives data
// print that data to the console
// end the process
client.on("data", (data) => {
  console.log(`Reversed string received from server is: ${data}`);
  process.exit();
});

client.connect(8000, "localhost", () => {
  // rl.question is a function that prints something to the commandline and
  // then waits for the user to press 'enter' on the keyboard
  // rl.question requires 2 parameters:
  //    - a string that it prints onto the console to prompt the user for input
  //    - a callback function that is run once the user processes 'enter'
  //        this callback function requires one parameter:
  //        - 'input' which is the input that the user typed into the commandline
  rl.question("enter something to reverse: ", (input) => {
    // client.write is a function that sends data to the connected server
    // client.write requires 1 parameter: a string or data buffer to send
    client.write(input);
  });
});