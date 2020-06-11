// Exercise: character counts
/*
function charCounts(str) {
  const counts = {};

  for (let char of str.toLowerCase()) {
    if (counts[char]) {
      counts[char] += 1; // counts[char] = counts[char] + 1
    } else {
      counts[char] = 1;
    }
  }

  return counts;
}

console.log(charCounts("An archor"));
*/

// Turn the above regular function into an arrow function
/*
const charCounts = (str) => {
  const counts = {};

  for (let char of str.toLowerCase()) {
    if (counts[char]) {
      counts[char] += 1; // counts[char] = counts[char] + 1
    } else {
      counts[char] = 1;
    }
  }

  return counts;
};

console.log(charCounts("An archor"));
*/

// Solution using only for loop
const phrase = process.argv[2];
let chars = phrase.split("");
const counterObject = {};

for (let i = 0; i < chars.length; i++) {
  let character = chars[i].toLowerCase();
  counterObject.hasOwnProperty(character)
    ? (counterObject[character] = counterObject[character] + 1)
    : (counterObject[character] = 1);
}
console.log(counterObject);

