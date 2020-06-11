// constructor
function IsLeap(year) {
    this.year = year; 
    console.log(this);
  };
  // prototype
  IsLeap.prototype.check = function () {
    if (this.year % 4 === 0) {
      if (this.year % 100 === 0) {
        if (this.year % 400 === 0) {
          return true;
        }
        return false;
      }
      return true;
    }
    else {
      return false;
    }
  }
  const anotherYear = new IsLeap(1996); // true
  const anotherYear2 = new IsLeap (1997); //false
  const anotherYear3 = new IsLeap (1900); // false
  const anotherYear4 = new IsLeap (2000); // true
  console.log(anotherYear.check());
  console.log(anotherYear2.check());
  console.log(anotherYear3.check());
  console.log(anotherYear4.check());