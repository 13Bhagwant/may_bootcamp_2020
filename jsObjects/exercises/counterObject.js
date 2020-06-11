// Keyword 'this'
// 'this' is used inside of methods to get the object that owns them

// Demo: A counter
// Exercise: configurable step
// Exercise: Chainable counter
const counter = {
    count: 0,
    step: 1,
    setStep(userDefinedStep) {
      this.step = userDefinedStep;
      return this;
    },
    set(n) {
      this.count = n;
      return this;
    },
    inc() {
      this.count += this.step;
      return this;
    },
    dec() {
      this.count -= this.step;
      return this;
    },
    now() {
      return this.count;
    },
  };
  
  // counter.count; // 0
  // counter.setStep(5); // counter.step = 5
  // counter.set(5); // counter.count = 5
  // counter.inc(); // counter.count = 10
  // counter.inc(); // counter.count = 15
  // counter.dec(); // counter.count = 10
  // console.log(counter.now()); // counter.count = 10
  
  console.log(counter.set(5).setStep(5).inc().inc().dec().now());
  