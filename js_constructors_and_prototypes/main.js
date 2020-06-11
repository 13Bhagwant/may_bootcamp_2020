// JS: Constructors & Prototypes

// Object literal syntax
if (false) {
    const sonicSam = {
      name: 'Sonic Sam',
      age: 5,
    }
  }
  
  // Constructors
  
  function Dog(name, age) {
    // When a function is invoked with the 'new' keyword, JS will know to use this as a constructor
    // When invoked, its 'this' is a new empty object
    // implicity --> const this = {} 
  
    // We build the object (instance) by assigning values to 'this'
    this.name = name
    this.age = age
  
    // Don't add methods here, because we'd create a function for every instance that does the same thing
    // Add this method to the prototype instead
    // this.bark = function() {
    //   return `${this.name} barks woof!`
    // }
  
    // At the end of the function, 'this' is returned 
    // return this
  
    // The line below will be returned if the function is used without the 'new' keyword
    return 'this function creates dogs'
  }
  
  // Use a function as a a constructor by prefiexing with the 'new' keyword
  // sonicSam and jivingJim is an instance of the constructor
  const sonicSam = new Dog('Sonic Sam', 5)
  const jivingJim = new Dog('Jiving Jim', 11)
  
  // This is bad, it doesn't return an instance of the Dog constructor
  // We're actually setting properties to the global object in this case
  // It treats Dog as a regular function
  // It returns undefined implicitly or 'this function creates dogs' 
  const notADog = Dog('James', 12)
  
  // Prototypes
  
  sonicSam.__proto__ // returns the prototype of Dog instances
  Dog.__proto__ // returns the prototype of functions
  
  Dog.prototype === Dog.__proto__ // false
  Dog.prototype === sonicSam.__proto__ // true
  
  // The prototype property only exists on the constructor, not on instances
  sonicSam.prototype // undefined
  
  Dog.prototype.bark = function() {
    return `${this.name} barks woof!`
  }
  
  // Don't do this, do what is written above using the prototype
  sonicSam.run = function() {}
  jivingJim.fetch = function () {}
  
  // Exercise: Prototypical counter
  function Counter(count, step) {
    this.count = count
    this.step = step 
  }
  
  Counter.prototype.set = function(n) {
    this.count = n
    return this
  }
  Counter.prototype.inc = function() {
    this.count += this.step
    return this
  }
  Counter.prototype.dec = function() {
    this.count -= this.step
    return this
  }
  Counter.prototype.now = function() {
    return this.count
  }
  
  const counterInstance = new Counter(5, 2)
  
  function DogFighter(name, age, specialAbility) {
    this.name = name
    this.age = age
    this.specialAbility = specialAbility
  }
  
  DogFighter.prototype.fight = function(opponent) {
    const contestants = [this.name, opponent.name]
    const winner = contestants[Math.floor(Math.random() * 2)]
    return `${winner} won!`
  }
  
  Object.setPrototypeOf(DogFighter.prototype, Dog.prototype)
  
  const lumberjackLawrence = new DogFighter('Lumberjack Lawrence', 7, 'Chainsaw Chop')
  const drillBitDarel = new DogFighter('Drill Bit Darel', 9, 'DRILL!!')
  
  // This works now because Dogfighter prototype inherits from the Dog prototype
  lumberjackLawrence.bark() 
  
  // Classes
  
  class Doggo {
    // constructor method will run when Doggo constructor is called
    constructor(name, age) {
      this.name = name
      this.age = age
    }
  
    bark() {
    return `${this.name} barks woof!`
    }
  
    sleep() {
      return 'ZZzzzzz....';
    } 
  }
  
  const moneybagsMichael = new Doggo('Moneybags Michael', 3)
  
  // Cannot call classes without 'new' keyword
  // but you shouldn't call constructor like this anyways
  // const anotherDoggo = Doggo('name', 15)
  
  class DoggoFighter extends Doggo {
    constructor(name, age, specialAbility) {
      // When we call super inside of any method, that means it's gonna call the method from the class it extends from. 
      // Here we are calling super inside of constructor, so it calls constructor from the Doggo class
      super(name, age) 
      // this.name = name
      // this.age = age
      this.specialAbility = specialAbility
    }
    fight(opponent) {
      const contestants = [this.name, opponent.name]
      const winner = contestants[Math.floor(Math.random() * 2)]
      return `${winner} won!`
    }
  }
  
  const rebel = new DoggoFighter('Rebel', 5, 'Teenage Angst Kickflip')
  
  class CounterClass {
    constructor(count, step) {
      this.count = count
      this.step = step 
    }
    set(n) {
      this.count = n
      return this
    }
    inc() {
      this.count += this.step
      return this
    }
    dec() {
      this.count -= this.step
      return this
    }
    now() {
      return this.count
    }
  }
  
  const counterClassInstance = new CounterClass(0, 1)
  
  // this keyword
  
  // 'this' outside of a method will be the global object 
  console.log('this:', this)
  
  function whatIsThis() {
    return this
  }
  
  const can = {
    name: 'can',
    touchThis() {
      return this
    },
    whatIsThis: whatIsThis
  }
  
  const cant = {
    name: 'can\'t',
    touchThis: can.touchThis,
  }
  
  can.touchThis() // can object
  cant.touchThis() // cant object
  
  