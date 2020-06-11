
const reduce = (arr, fn, initialValue) => {
    let acc = initialValue; // 0
    // arr = [1, 2, 3, 4, 5]
    // fn = plus = (a, b) => a + b;
    for (let i = 0; i < arr.length; i++) {
      // iteration: 1
      // i = 0, acc = 0, arr[i] = 1, arr = [1, 2, 3, 4, 5]
      // acc = plus(0, 1, 0, [1, 2, 3, 4, 5]); // 1
  
      // iteration: 2
      // i = 1, acc = 1, arr[i] = 2, arr = [1, 2, 3, 4, 5]
      // acc = plus(1, 2, 1, [1, 2, 3, 4, 5]); // 3
  
      // iteration: 3
      // i = 2, acc = 3, arr[i] = 3, arr = [1, 2, 3, 4, 5]
      // acc = plus(3, 3, 2, [1, 2, 3, 4, 5]); // 6
  
      // iteration: 4
      // i = 3, acc = 6, arr[i] = 4, arr = [1, 2, 3, 4, 5]
      // acc = plus(6, 4, 3, [1, 2, 3, 4, 5]); // 10
  
      // iteration: 5
      // i = 4, acc = 10, arr[i] = 5, arr = [1, 2, 3, 4, 5]
      // acc = plus(10, 5, 4, [1, 2, 3, 4, 5]); // 15
  
      // iteration: 6 <= i = 5 because 'i' is not less than
      //   arr.length then the for..loop will terminate with
      //   last value of 'acc' which is 15
  
      acc = fn(acc, arr[i], i, arr);
    }
  
    return acc;
  };
  
  const plus = (a, b) => a + b;
  
  let numbers = [1, 2, 3, 4, 5];
  console.log(reduce(numbers, plus, 0)); // 15
  
  console.log(reduce(numbers, (a, b) => a * b, 1)); // 120