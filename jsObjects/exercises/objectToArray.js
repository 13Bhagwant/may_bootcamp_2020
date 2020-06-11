
// Exercise: Object to Array
/*
function toArray(obj) {
  const newArray = [];
  //   let iteration = 0;

  for (let key in obj) {
    newArray.push([key, obj[key]]);
    // console.log(`iteration: ${iteration}`);
    // console.log("newArray: ", newArray);
    // iteration += 1;
  }

  return newArray;
}
*/

// Turn the above function into an arrow function
const toArray = (obj) => {
    const newArray = [];
    //   let iteration = 0;
  
    for (let key in obj) {
      newArray.push([key, obj[key]]);
      // console.log(`iteration: ${iteration}`);
      // console.log("newArray: ", newArray);
      // iteration += 1;
    }
  
    return newArray;
  };
  
  const myObj = {
    a: 1,
    b: 2,
    c: [6, 7],
    d: 4,
    e: 5,
  };
  
  console.log(myObj);
  console.log("================");
  
  console.log(toArray(myObj));