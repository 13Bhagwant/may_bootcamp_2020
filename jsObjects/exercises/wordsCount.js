// Exercise: Word Counts
/*
function wordCounts(sentence) {
  const counts = {};

  const sentenceArray = sentence.split(" "); // [ 'this', 'is', 'this', 'and', 'that' ]

  for (let word of sentenceArray) {
    //   console.log("word: ", word);
    if (counts[word]) {
        // When using brackets to create a key-value pair,
        // you are allowed to use an expression inside of
        // the brackets. The value that is returned from 
        // the expression will be used a key.
      counts[word] += 1; // counts[word] = counts[word] + 1
    } else {
      counts[word] = 1;
    }
  }

  return counts;
}

const sentence = "this is this and that";

console.log(wordCounts(sentence));
*/

// Solution: using for..loop
const sentence = process.argv[2];
let words = sentence.split(" ");

const counterObject = {};

for (let i = 0; i < words.length; i++) {
  counterObject.hasOwnProperty(words[i])
    ? (counterObject[words[i]] = counterObject[words[i]] + 1)
    : (counterObject[words[i]] = 1);
}

console.log(counterObject);