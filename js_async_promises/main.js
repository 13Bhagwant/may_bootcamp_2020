// JS Promises

// To create a promise, use the Promise constructor
// it takes in a callback as an argument

const myFirstPromise = new Promise(() => {} /* this cb is aka the "resolver" */ )

const mySecondPromise = new Promise((resolve, reject) => {
  // The resolver callback is passed two arguments in order:
    // - A function named 'resolve' which transitions the promise from the 
    //   "pending" state to the "resolved" state
    //   The argument passed in to this function becomes the promise's value
    // - A function named 'reject which transitions the promise from the 
    //   "pending" state to the "rejected" state
    //   The argument passed in to this function becomes the promise's value/
    //   Use this to handle errors 

  // Any reject() and resolve() calls after the promise has already been resolved will be ignored
  // Once resolved/or rejected, the promise is in its final state
  resolve("Promised resolved!")
  reject(new Error("You did a booboo!"))
  resolve("Can I resolve again?")
})

// Demo: Flipping coins
function flipCoin() {
  return new Promise((resolve, reject) => {
    const coinFace = ["Heads", "Tails"][Math.floor(Math.random() * 2)]
    resolve(coinFace)
  })
}

function throwCoin() {
  return new Promise((resolve, reject) => {
    const coinFace = ["Heads", "Tails"][Math.floor(Math.random() * 2)]

    // When creating a promise, you must wrtie your 
    // asynchronous code inside of the "resolver"
    // the "resolve" function will be called when the 
    // async code has finished executing
    setTimeout(() => {
      resolve(coinFace)
    }, 1000 + 3000 * Math.random())

    setTimeout(() => {
      reject(new Error("Coin was thrown too far!"))
    }, 3000)
  }) 
}

// Using a Promises's Value

// Promises have a .then() method on the prototype
// Call it with a callback as its argument which will be 
// invoked when the promise's value is resolved
// The callback to .catch() will be called if the promise is rejected 
function usingPromiseDemo() {
  const coinFace = throwCoin()
  coinFace.then(promiseValue => console.log(promiseValue))
  coinFace.catch(error => console.error(error))
}

function secondPromiseDemo() {
  const coinFace = throwCoin()

  coinFace.then(promiseValue => console.log(promiseValue))
  coinFace.then(promiseValue => console.log(promiseValue))
  coinFace.then(promiseValue => console.log(promiseValue))
  coinFace.catch(error => console.error(error))
}

function chainingThenDemo() {
  return throwCoin()
          .then(promiseValue => console.log(promiseValue))
          .catch(error => console.error(error))
}

function moreChainingDemo() {
  throwCoin()
    .then(value => {
      console.log("1st .then:", value)

      // .then() returns a promise with a value of the string below
      return "Hello from .then 1" 
    })
    .then(value => {
      console.log("2nd .then:", value)

      // If the callback returns a promise, the .then() 
      // will return that promise, allowing us to chain
      return throwCoin() // this returns a promise
    })
    .then(value => {
      console.log("3rd .then:", value)
    })
    .catch(err => console.error(err))
}

function delay(ms, value) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(value)
    }, ms)
  })
}

// Delay Throwing the coin

// Nest then()
// This looks similar to callback hell
// delay(1000)
//   .then(() => {
//     throwCoin()
//       .then(value => console.log(value))
//       .catch(error => console.error(error))
//     })
    
// Chaining sequentially is much more readable
delay(1000, 'delay complete')
  .then(value => console.log(value))
  .then(() => throwCoin())
  .then(value => console.log(value))
  .catch(error => console.error(error))

// Promise methods

// Use 'Promise.resolve(value)' to create a promise
// that will be resolved with the value
Promise.resolve(100)
// Same as doing:
new Promise((resolve, reject) => resolve(100))

Promise.reject("Oops!")
// Same as doing:
new Promise((resolve, reject) => reject("Oops!"))

Promise.all([
  delay(1000, 'apple'),
  delay(2000, 'banana'),
  delay(3000, 'orange'),
]).then(fruits => console.log(fruits)) 

// The callback in .then() will only be called when every promise is resolved in the array
// .catch() will be called when any of the promises are rejected 

Promise.race([
  delay(1000, 'apple'),
  delay(2000, 'banana'),
  delay(3000, 'orange'),
]).then(fruits => console.log(fruits)) // returns apple because it was the first to finish