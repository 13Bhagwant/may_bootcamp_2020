
const chalk = require("chalk");
// Skip first 2 elements from 'process.argv' and assign remaining 3 elements
// to variables: colour, with and height
const [, , colour, width, height] = process.argv;

const board = Array.from({ length: width * height })
  .map((val, i) => {
    return (i + 1 + Math.floor(i / width)) % 2 === 0
      ? chalk.bgKeyword(colour)(" ")
      : " ";
  })

  // Join all characters into one string with a '\n' character
  // every 'width' characters.
  .reduce((acc, val, i) =>
    (i + 1) % width === 0 ? acc + val + "\n" : acc + val
  );

console.log(board);