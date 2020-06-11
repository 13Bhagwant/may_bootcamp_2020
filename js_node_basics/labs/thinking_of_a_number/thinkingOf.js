
const readline = require("readline");
const thinkingOf = Math.ceil(Math.random() * 10);

let attemptsCount = 1;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const checkAnswer = (answer) => {
  if (parseInt(answer) === thinkingOf) {
    console.log(`Guessed "${answer}" correctly in ${attemptsCount} attempts!`);
    rl.close();
  } else {
    attemptsCount += 1;
    rl.question(`Nope. Try again. \n> `, checkAnswer);
  }
};

rl.question(
  `I'm think of a number between 1 and 10 inclusive \n> `,
  checkAnswer
);