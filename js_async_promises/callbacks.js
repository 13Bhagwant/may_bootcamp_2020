// A callback is a function that's passed into another
// function as an argument (often asynchronous)

const callback = () => console.log('callback called') // 3rd

console.log('Before setTimeout') // 1st

setTimeout(callback, 1000)

console.log('After setTimeout') // 2nd

