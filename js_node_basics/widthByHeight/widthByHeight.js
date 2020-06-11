const fs = require("fs");

const width = process.argv[2];
const height = process.argv[3];

let rectangle = "";

for (let row = 1; row <= height; row++) {
  for (let column = 1; column <= width; column++) {
    rectangle += "* ";
  }
  rectangle += "\n";
}

const fileName = `${width}_by_${height}.txt`;

fs.writeFile(fileName, rectangle, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`wrote "${fileName}" to disk`);
});