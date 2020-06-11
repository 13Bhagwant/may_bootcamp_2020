// JS Higher Order Functions
console.log("JS Higher Order Functions");

if (false) {
  function add(a, b) {
    const total = a + b;
    return total;
  }

  add(1, 4); // this returns 5
  console.log("add(1, 5) = ", add(1, 5));
  console.log("add ", add);
}

// functions are a base type
// they can be assigned, re-assigned, be property values
// But they can also do anything that another variable could do
// Including be passed as an argument to a function

const myString = "string";
const myOtherString = myString;

function testFn(str) {
  console.log("Your string was ", str);
}

const myOtherFunction = testFn;
// These two functions calls will print the exact same thing
testFn("hello");
myOtherFunction("hello");

const returnOne = function () {
  return 1;
};

const otherFn = returnOne;
// The function below, has NOT been called yet.
// This means it hasn't been executed, and so it will not yet return to us
// the value of 1.
// console.log("otherFn", otherFn); // some function definition? 1?
// the line above prints the value of 'otherFn' to console
// that value is a function definition

// The code below actually executes that function, and so will
// print 1 to the console
// console.log("otherFn()", otherFn());

// Arrow functions

// convert the above function to an arrow function

const testFn1 = (str) => {
  console.log("Your string was", str);
};
// if you have only one argument you can type it
// without brackets
// const testFn1 = str => {
// console.log("Your string was", str);
// }

// another example
// const multiply = (x, y) => {
//   return x * y;
// };

// Note: if you have only one line in an arrow function,
// you can omit the curly braces and return key word
const multiply = (x, y) => x * y;

// another example
// const duplicate = function (x) {
//   return x * 2;
// };

// arrow function verstion of the above function
const duplicate = (x) => x * 2;
// const duplicate = x => x * 2; // same as above but x has no brackets around it since it's only one argument

const sleep = () => "Zzzzzz.....";

// const sleep = function () {
//     return "Zzzzzz.....";
// }

// HIGHER ORDER FUNCTIONS
//  1. A function is a higher order function if it accepts a function as an argument
if (false) {
  function square(x) {
    return x * x;
  }

  function callSquare(x, fn) {
    // x = 4
    // fn = square
    // return square(x); // 16
    // return 16
    return fn(x);
  }

  callSquare(4, square);
}

const square = (x) => x * x;
const callSquare = (x, fn) => fn(x);

// In above function (callSquare) we can:
console.log(callSquare(10, square)); // 100
// - above we are calling callSquare function with two arguments(10, and
//  square function)
//  - The callSquare higher order function takes in both (10, and square function) arguments
//  - so in callSquare now: x = 10, and fn = square
//  - in the body of callSquare we are returning fn(x) => which in our case
//  will be square(10);

// 2. a function is a higher order function if it returns a function
if (false) {
  function multiplier(factor) {
    return function (x) {
      return x * factor;
    };
  }

  // 1. we turned the outer function into an arrow function
  //   const multiplier = (factor) => {
  //     return function (x) {
  //       return x * factor;
  //     };
  //   };

  // 2. let's turn the inner function into an arrow function as well
  //   const multiplier = (factor) => {
  //     return (x) => {
  //       return x * factor;
  //     };
  //   };
}

// 3. let's refactor our arrow function that returns an arrow function
const multiplier = (factor) => (x) => x * factor;

const doubleIt = multiplier(2);
const tripleIt = multiplier(3);
const quadIt = multiplier(4);

if (false) {
  // Exercise: To Arrow.
  const add = (a, b) => a + b;

  const flip = (fn) => (a, b) => fn(b, a);

  const V = (x) => (y) => (z) => z(x)(y);
}

// function flip() {
//   return function (a, b) {
//     return `${b}, '${a}`;
//   };
// }

const flip = () => (a, b) => `${b}, ${a}`;

const innerFn = flip(); // this will give us back something similar to the below line
// const innerFn = (a, b) => `${b}, ${a}`;

const test = () => console.log("testing....");

const print1 = (fn) => {
  // if (typeof fn === "function") {
  if (fn instanceof Function) {
    console.log("yay! you passed down a function");
    return fn();
  }
};

print1("Hi there I am a string not a function");
// print1(test);

// Demo: A Loud Function

const hello = () => "greeting";
const bye = () => "bye";

const loud = (fn) => {
  console.log(`Calling ${fn.name}`); //
  const value = fn();
  console.log(`Called ${fn.name} and it returned ${value}`);
  return value;
};

// loud(hello()); // this is not work! loud will try call hello();
// loud(hello);

// Exercise: customLogger

const five = () => 5;
const ten = () => 10;
const four = () => 4;

const customLogger = (logFn, fn) => {
  console.log("logFn: ", logFn);
  console.log("fn: ", fn);
  logFn(`Calling ${fn.name}`);
  const value = fn();
  logFn(`Called ${fn.name} and it returned ${value}`);
  return value;
};

customLogger(console.warn, five);
customLogger(console.info, ten);
customLogger(console.warn, () => 20);

console.clear();

// Demo: Implement Each

const each = (callback, arr) => {
  // arr = [1, 2, 'hello']
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
    // callback(1, 0);
    // callback(2, 1);
    // callback('hello', 2)
  }
};

// how to use the each function that we created above.
// - Takes in the first parameter of a callback
//     the callback takes in two parameters value, and index
// - The second parameter is the array the HOF will operate on

const printValues = (val, index) =>
  console.log(`The index: ${index} is ${val}`);

each(printValues, [1, "hi", 2, "bye", 3]);

// Demo: Map implementation

const map = (fn, array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    // this loop will invoke 'fn' for every single element in the array
    let result = fn(array[i], i);
    newArray.push(result);
  }

  return newArray;
};

const tripleTheElements = (val) => val * 3;

// repeat implementation
const repeat = (str, repeatTimes) => {
  let newString = "";

  for (let i = 1; i <= repeatTimes; i++) {
    newString += str; // newString = newString + str;
  }

  return newString;
};

repeat("hello", 2); // 'hellohello'

console.clear();
// RECURSION
// Recursion is a higher order function that calls itself inside its own block.
// Every recursive function must have a terminate condition other wise you get
//    RangeError: Maximum call stack size exceeded

// Always try to get closer to the terminate condition to stop calling recursive
// at some point
function sum(arr) {
  // iterations
  // iteration 1: arr = [1, 2, 3, 4, 5], arr.length = 5
  // iteration 2: arr = [2, 3, 4 , 5], arr.length = 4
  // iteration 3: arr = [3, 4, 5], arr.length = 3
  // iteration 4: arr = [4, 5], arr.length = 2
  // iteration 5: arr = [5], arr.length = 1
  // iteration 6: arr = [], arr.length = 0
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sum(arr.slice(1));
  // return 1 + sum([2, 3, 4, 5]); // returned 1 + sum([2, 3, 4, 5])  = 15
  // return 2 + sum([3, 4 , 5]); // returned 2 + sum([3, 4, 5]) = 14
  // return 3 + sum([4, 5]); // returned 3 + sum([4, 5]) = 12
  // return 4 + sum([5]); // returned 4 + sum([5]) = 9
  // return 5 + sum([]); // returned 5
}

console.log(sum([1, 2, 3, 4, 5]));

function printMeRecursively(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  return printMeRecursively(n - 1);
}

// printMeRecursively(9);

// Recursive Factorial

// 4! = 4 * 3 * 2 * 1 = 24
// 0! = 1
// 1! = 1

// implement factorial with iterations (without recursion)
console.time("finding factorial with iterations");
const factorialI = (n) => {
  let product = 1;
  if (n === 0) {
    return product;
  }

  for (let i = n; i >= 1; i--) {
    product *= i;
  }

  return product;
};

console.log(factorialI(20));
console.timeEnd("finding factorial with iterations");
console.log(factorialI(0));
console.log(factorialI(1));
// then turn that iteration into a recursive solution
console.time("finding factorial using recursion");
const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
};

console.log(factorial(20));
console.timeEnd("finding factorial using recursion");
console.log(factorial(0));
console.log(factorial(1));

// reversing a string using recursion
console.time("reversing a string recursively");
const recursiveReverse = (string) => {
  if (string.length === 0) {
    return "";
  }

  const firstChar = string[0];
  const restOfString = string.slice(1);

  return recursiveReverse(restOfString) + firstChar;
  // return recursiveReverse('indreen') + 'h'; <= 'neerdni' + 'h' = 'neerdnih'
  // return recursiveReverse('ndreen') + 'i'; <= 'neerdn' + 'i' = 'neerdni'
  // return recursiveReverse('dreen') + 'n'; <= 'neerd' + 'n' = 'neerdn'
  // return recursiveReverse('reen') + 'd'; <= 'neer' + 'd' = 'neerd'
  // return recursiveReverse('een') + 'r'; <= 'nee' + 'r' = 'neer'
  // return recursiveReverse('en') + 'e'; <= 'ne' + 'e' = 'nee'
  // return recursiveReverse('n') + 'e'; <= 'n' + 'e' = 'ne'
  // return recursiveReverse('') + 'n'; <= '' + 'n' = 'n'
  // return ''
};

console.log(recursiveReverse("hindreen"));
console.timeEnd("reversing a string recursively");