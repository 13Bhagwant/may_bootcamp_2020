// checks that all elements within a given array are of the same type
// types to look out for:
// null
// undefined
// boolean
// string
// number
// object
// array
// function

function isHomogenous(arr) {
  // in javascript an array is a special object
  // `typeof array` will return 'object'
  // so we need to use `Array.isArray()` to check if an object is an array
  if (Array.isArray(arr[0])) {
    // if the first element of the array is an array
    // we loop through the array to check if they are all arrays
  } else if (null === arr[0]) {
    for (const element of arr) {
      // if an element is not an array we return false
      if (null !== element) {
        return false
      }
    }
  } else {
    // check and store the type of the first element within the given array
    const type = typeof arr[0];
    // check if all elements within the array has the same type that we stored
    for (const element of arr) {
      // if an element is not of the same type we return false
      if (typeof element !== type) {
        return false;
      }
    }
  }
  // if we loop through the array without the function 
  // returning false we can safely say that they're 
  // all of the same type and return true.
  return true;
}

console.log(isHomogenous(['',''])); //true
console.log(isHomogenous([1,'1'])); //false
console.log(isHomogenous([[],[]])); //true
console.log(isHomogenous([[],{}])); //false
console.log(isHomogenous([function() {}, () => {}, function notAnonymous() {}])); //true
console.log(isHomogenous([function() {}, {}])); //false
console.log(isHomogenous([null,undefined])); //false
console.log(isHomogenous([null,{}])); //false
console.log(isHomogenous([null,null, null])); //true
