const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("what is the width of the rectangle? \n", (width) => {
  //   console.log(width);
  rl.question("what is the height of the rectangle? \n", (height) => {
    // console.log(height);
    rl.question("what is the output file name? \n", (fileName) => {
      //   console.log(fileName);
      // use the code from widthByHeight exercise to create a rectangle
      createFileWithStars(width, height, fileName);
      rl.close();
    });
  });
});

function createFileWithStars(width, height, fileName) {
  let rectangle = "";

  for (let row = 1; row <= height; row++) {
    for (let column = 1; column <= width; column++) {
      rectangle += "* ";
    }
    rectangle += "\n";
  }

  fs.writeFile(`${fileName}.txt`, rectangle, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`wrote "${fileName}" to disk`);
  });
}