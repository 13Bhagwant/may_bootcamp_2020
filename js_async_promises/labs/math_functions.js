function add(a, b = 0) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (isNaN(a) || isNaN(b)) {
          rej(new Error("All arguments must be numbers"))
        }
        res(a + b)
      }, 0)
    })
  }
  
  function sub(a, b = 0) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (isNaN(a) || isNaN(b)) {
          rej(new Error("All arguments must be numbers"))
        }
        res(a - b)
      }, 0)
    })
  }
  
  function mult(a, b = 1) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (isNaN(a) || isNaN(b)) {
          rej(new Error("All arguments must be numbers"))
        }
        res(a * b)
      }, 0)
    })
  }
  
  function div(a, b = 1) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (isNaN(a) || isNaN(b)) {
          rej(new Error("All arguments must be numbers"))
        }
        res(a / b)
      }, 0)
    })
  }
  
  function pow(a, b = 1) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (isNaN(a) || isNaN(b)) {
          rej(new Error("All arguments must be numbers"))
        }
        res(a ** b)
      }, 0)
    })
  }
  