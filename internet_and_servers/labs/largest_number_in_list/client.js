const net = require("net");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const client = new net.Socket();

client.connect(8000, "localhost", () => {
  rl.question(
    "enter comma separated numbers like this 1,2,3,4,5: ",
    (input) => {
      client.write(input);
    }
  );
});

client.on("data", (data) => {
  console.log(data + "");
  process.exit();
});