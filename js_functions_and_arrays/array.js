// JS Arrays:
// Arrays are ordered collections of data

// Use square brackets [] to define an array
// Each element is separated by a comma, 
// and can take in an expression
[1, 'a string', false, [3, 4]]

// You can also nest arrays
[1, [2, [3, 4]]]

// Ways to work with arrays:
const arr = [1, 2, 3, 4, 5]
arr.length // 5
//[].length => 0
arr[0] // 1
arr[-1] // undefined

// Concatenate arrays on other arrays
arr.concat([6, 7, 8]) // [1, 2, 3, 4, 5, 6, 7, 8]

// Extract part of an array
// .slice() returns a new array as a portion of the array that it was called on
// .slice(index1, index2)
// index1: the beginning index of the new array (inclusive)
// index2: the ending index of the new array (exclusive)
arr.slice(1) // [2, 3, 4, 5]
arr.slice(0, 2) // [1, 2]

// slice() and concat() don't mutate the array that it was called on
arr // [1, 2, 3, 4, 5]

// .join() joins together all elements in an array,
// separated by the argument that you pass in
// and returns a string
// it does not mutate the underlying array
arr.join('') // '12345'

// Mutating operations
arr[0] = 5
arr.shift() // removes and returns first element
arr.pop() // removes and returns last element
arr.unshift(0, 1) // adds elements to the beginning and returns the new array length
arr.push(6) // adds elements to the end of the array and returns the new array length

// Check if a value is an array
Array.isArray(arr) // true
Array.isArray({}) // false
Array.isArray([]) // true

// Check if a value is inside of an array
arr.includes(5)
