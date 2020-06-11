const fs = require("fs");

const fileName = process.argv[2];

console.log(fileName);

fs.readFile(fileName, (err, data) => {
    if (err) console.error(err)
  const fileContents = data.toString();
  const linesArray = fileContents.split("\n");
  //   console.log(linesArray);
  linesArray.forEach((line, index) => {
    console.log(`${index + 1} | ${line}`);
  });
});
