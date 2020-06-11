function printMe() {
    const a = 5;
    if (a > 2) {
      let b = 10;
      console.log("a inside if statement: ", a);
      console.log("b inside if statement: ", b);
    }
    console.log("a outside if and inside printMe: ", a);
    //   console.log("b outside if and inside printMe: ", b);
  }
  // console.log(a); // a is undefined because a is not available outside printMe function scope
  // console.log(b); // b is undefined because b is not available outside printMe if function scope
  
  printMe();
  // a inside if statement: 5
  // b inside if statement: 10
  // a outside if and inside printMe: 5
  // b outside if and inside printMe: undefined because the scope of b variable is the if brackets
  
  // DON'T EVER USE 'var' KEYWORD TO DEFINE YOUR VARIABLES BECAUSE VARIABLE DECLARED WITH
  // 'var' ARE GLOBAL