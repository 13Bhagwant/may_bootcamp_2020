// Exercise: Array Utils
function last(arr) {
    return arr[arr.length - 1];
  }
  const ArrayUtils = {
    // A **method** is a property of an object whose
    // value is a function
    // Think of it as function that is owned by
    // an object.
    first: function (arr) {
      return arr[0];
    },
    last: last,
    // The following is writting using shorthand syntax.
    // This only works when define a function as a method
    take(arr, n) {
      return arr.slice(0, n);
    },
    // The code above is syntax sugar for the code
    // below. They behave exactly the same way.
    //   take: function (arr, n) {
    //     return arr.slice(0, n);
    //   },
  
    // Exercise: To Object
    toObject(arr) {
      const newObj = {};
      for (let pair of arr) {
        // iteration 0 => ["a", 1]
         console.log("pair: ", pair);
        newObj[pair[0]] = pair[1];
      }
  
      return newObj;
    },
  };
  
  console.log(ArrayUtils.last([100, 200, 300]));
  console.log(ArrayUtils.first([100, 200, 300]));
  console.log(ArrayUtils.take([100, 200, 300, 400], 2));
  
  const pairs = [
    ["a", 1, 3],
    ["b", 2],
    ["c", 3],
    ["d", [1, 2, 3]],
  ];
  
  console.log(ArrayUtils.toObject(pairs));