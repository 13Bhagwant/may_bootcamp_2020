const readline = require("readline");
const thinkingOf = Math.ceil(Math.random() * 10);

let attemptsCount = 1;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Alternative more idiomatic solution using Event-based methods
// https://nodejs.org/docs/latest-v12.x/api/readline.html#readline_event_line
rl.setPrompt("> ");
// https://nodejs.org/docs/latest-v12.x/api/readline.html#readline_rl_setprompt_prompt
rl.on("line", (answer) => {
  if (parseInt(answer) === thinkingOf) {
    console.log(`Guessed "${answer}" correctly in ${attemptsCount} attempts!`);
    rl.close();
  } else {
    console.log(`Nope. Try again. \n> `);
    attemptsCount += 1;
    // https://nodejs.org/docs/latest-v12.x/api/readline.html#readline_rl_prompt_preservecursor
    rl.prompt();
  }
});

console.log(`I'm think of a number between 1 and 10 inclusive \n> `);

rl.prompt();