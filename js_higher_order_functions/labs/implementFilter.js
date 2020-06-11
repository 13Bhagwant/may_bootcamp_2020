// const log = console.log;
// if the variable name and the property are the same,
// we can use below es6 syntax (destructuring)
const { log } = console;

const filter = (arr, fn) => {
    // fn  = even
    // arr = [1, 2, 3, 4, 5, 6]
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      result.push(arr[i]); 
    }
  }
  return result;
};

// given three functions
// even returns true if its argument, n, is an even number (false otherwise)
const even = (n) => n % 2 === 0;

// odd returns true if its argument, n, is an odd number (false otherwise)
const odd = (n) => !even(n);

// crates a function that returns true if its argument is above min
const above = (min) => (n) => n > min;

let arr = [1, 2, 3, 4, 5, 6];

log(filter(arr, even)); // returns 2,4,6
log(filter(arr, odd)); // returns 1,3,5
log(filter(arr, above(3))); // returns 4,5,6

const repeatedValue = function (value, index, arr) {
  return index !== arr.indexOf(value);
};

log(filter([1, 2, 3, 2, 3, 4, 5], repeatedValue)); // returns 2,3