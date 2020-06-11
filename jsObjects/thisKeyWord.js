// this is a keyword in JavaScript

// What this keyword actually means?
// A real life scenario, imagine you are in a car and you say this is fast,
// We do not say the car is fast or car is fast, we might say oh God this is so fast.
// In javascript when you are inside a function, an object or a class this refers to them
// or what calls those methods or functions (on the left side for example dog.sleep()) and with
// some exceptions but, we will look at that later

// 'this' inside Global scope (window)
// examples

this.foo = "bar"; // foo property will be added to global object (window) and that's because we are inside the global scope

// console.log(window.foo); // bar or we can also
// console.log(this);
// console.log(this.foo); // that also gives us bar because we are inside global scope and this belongs to global scope here

// Note: Window is only available in browser

// another example
function print() {
  //   console.log("this: ", this);
  //   console.log("this == person: ", this == person);
  console.log(`${this.name} is ${this.age} years old`);
}

const person = {
  name: "Alan",
  age: 29,
  occupation: "Engineer",
  printMe: print,
};

person.printMe(); // Alan is 29 years old

const person1 = {
  name: "Roman",
  age: 30,
  occupation: "Engineer",
  printMe: print,
};

person1.printMe(); // Roman is 30 years old

// as you see in the above examples 'this' is referring to the caller
// in both cases 'this' belonged to the different objects that we
// called print function with and that's what makes 'this' keyword
// dynamic

// This isnide a function
// suppose we have two global property names
name = "Aryan";
age = 22;

const printMe = function () {
  console.log("this: ", this); // this will refer to global object in node REPL and window in browser
  console.log(`${this.name} is ${this.age} years old`);
};

printMe(); // Aryan is 22 years old

// We learnt that 'this' inside the script is:
// 1. refer to 'window' if you are running your script in browser
// 2. refer to 'global object' if you are running your script in node REPL

// We also learnt that 'this' inside any REGULAR function belongs to the
// object that's calling the function or in another word whatever is from
// the left side of the function (e.g. person.printMe() <= this refers to the person object)

// 'this' keyword in arrow functions

const printMe = () => {
  console.log("this: ", this);
  console.log(`${this.name} is ${this.age} years`);
};

const obj = {
  name: "Alan",
  age: 21,
  print: printMe,
};

obj.print(); // undefined is undefined years
// this key word in arrow functions belong to the outer scope of
// the caller of the function which in above case is the outer scope
// of obj which is 'window' in browser and 'global object' in node