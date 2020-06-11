// 'setInterval' is like 'setTimeout' except
// that it will call the callback every interval
// in milliseconds

// setInterval(() => {
//   console.log("I will be logged to the console every second");
// }, 1000);

let count = 5;

const intervalId = setInterval(() => {
  if (count <= 0) {
    console.log("Go!");
    // clearInterval here
    clearInterval(intervalId);
    // console.log("intervalId: ", intervalId);
  } else {
    console.log(count + "...");
    count--;
  }
}, 1000);