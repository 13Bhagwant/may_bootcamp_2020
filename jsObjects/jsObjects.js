// JS: Objects
// Creating an object

// An object is defined with braces. Not to be confused
// with a code block.

const dog = {
    age: 10,
    firstName: "Benji",
    lastName: "Burlybottom",
    toys: ["Amazon delivery", "Pink Torn teddy bear"],
    bark: function () {
      return "Bork";
    },
  };
  
  // To read value associated to a key in an object
  // use the dot operator.
  dog.age; // 10
  
  // The dot operator is shortcut (syntax sugar)
  // for using [] brackets to refer to a key.
  dog["age"]; // 10
  
  // To create a new key-value pairs or change the value
  // of an existing key-value pair, do the following:
  dog.middleName = "Permberton";
  dog["eyeColor"] = "Green";
  
  // Keys when used with the dot operator can not
  // have special characters (e.g. spaces, commas, dashes, etc.)
  
  // dog.fur-color = "Brown"; // ILLEGAL KEY NAME WITH.
  dog["fur-color"] = "Brown"; // LEGAL WITH SQUARE BRACKETS
  
  // Object utility functions
  // Get all keys from object as an array
  // Use the Object.keys() function
  Object.keys(dog); // ['age', 'firstName', 'lastName', 'toys', ...]
  
  // Get all values from an object as an array
  Object.values(dog); // [10, 'Benji', 'Burlybottom', ...]
  
  // To merge objects together, use Object.assign().
  // In other words, this will combine the key-value
  // pairs of all objects passed to Object.assign()
  // into a single object.
  const obj1 = {
    a: 1,
    b: 2,
    c: 3,
  };
  
  const obj2 = {
    z: 20,
    x: 30,
    y: 40,
  };
  
  // Object.assign(obj1, obj2); // { a: 1, b: 2, c: 3, z: 20, x: 30, y: 40 }
  
  // This will mutate the first object passed meaning that
  // all key-values will be added to object
  // console.log(obj1); // { a: 1, b: 2, c: 3, z: 20, x: 30, y: 40 }
  
  // To create a new object with the key-value pairs of all
  // passed in objects without mutating any of them, use
  // an empty object as the first argument.
  const mergedObjects = Object.assign({}, obj1, obj2, { j: 10, k: 20, l: 30 });
  console.log(mergedObjects);
  console.log(obj1);
  
  // When mergine objects same named keys will be overwritten
  // where the conflicting key of the last objects being merged
  // will have priority
  
  const target = {
    a: 1,
    b: 2,
  };
  
  const source = {
    b: 4,
    c: 5,
  };
  
  const returnedTarget = Object.assign(target, source);
  console.log(target); // { a: 1, b: 4, c: 5 }
  
  // Iterating over objects
  // Use for..in loop which will iterate over the keys
  // of the object. Using the key, we can access its
  // paired value with the [] notation.
  console.log("Iterating over an object");
  for (let key in dog) {
    console.log("key: ", key, " value: ", dog[key]);
  }
  
  console.log(dog.bark());
  console.log("==============================");
  
  // Methods
  function add(x, y) {
    return x + y;
  }
  
  // We can set functions to variables and run them by triggering
  // those variables and passing down the necessary arguments
  const addTwoNumbers = add;
  console.log(addTwoNumbers(13, 19)); // 32
  
  function printing() {
    console.log(
      `name: ${person.name}, age: ${person.age}, EyeColor: ${person.features.eyeColor}`
    );
  }
  const person = {
    name: "John",
    age: 28,
    isEngineer: true,
    skills: ["drive", "fly", "programming"],
    features: {
      eyeColor: "grey",
      height: "5'11",
      weight: "167lbs",
    },
    printPerson: printing,
  };
  
  person.printPerson();
  
  const newDoggo = {
    name: "Pixy",
    age: 3,
    color: "white",
    // sleep: function () {
    //   console.log("Zzzzzzz.....");
    // },
    // The syntax sugar for the above method
    // is
    sleep() {
      console.log("Zzzzzzz.....");
    },
  };
  
  newDoggo.sleep();