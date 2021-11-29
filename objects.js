/*//////////////////////////////
---OBJECTS---
*/ //////////////////////////////

//Factory Function to create an object
function createCircle(radius) {
  return {
    radius, //property
    draw: function () {
      //method
      console.log('draw');
    },
  };
}

//Constructor
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
let pitBull = new Dog('Toro', 'white');

//IS6 new way to build a constructor
//Falta investigar más esta forma
class Person {
  constructor(firstAndLast) {}
}

//instanceof -> para saber si fue creado con un constructor
pitBull instanceof Dog; // true or false

//Adds all the properties of the object to an array
let ownProps = [];
for (let property in pitBull) {
  if (pitBull.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

//prototype -> Add a property that is shared for all the instances of the constructor
Dog.prototype.numLegs = 2;

//Get own properties of an object to an array
//and prototype properties to an other
let ownProps = [];
let prototypeProps = [];

for (let property in pitBull) {
  if (pitBull.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

//to know if the object inherits its prototype from a constructor
Dog.prototype.isPrototypeOf(pitBull); //true or false

//INHERITANCE
//Set a supertype so you dont have to repeat the same properties

//step1: create a supertype constructor function
function Animal() {}
Animal.prototype = {
  constructor: Animal,
  describe: function () {
    console.log('My name is ' + this.name);
  },
};

//step2: Inherit Behaviors from a Supertype
let animal = Object.create(Animal.prototype);

//step3: Set the Child's Prototype to an Instance of the Parent
Dog.prototype = Object.create(Animal.prototype);

//ACCESING AN OBJECT
for (let key in pitBull) {
  console.log(key /*properties*/, pitBull[key] /*values of the properies*/);
}
// access only properties and not methods
for (let key in pitBull) {
  if (typeof pitBull[key] !== 'function') {
    console.log(key, circle[key]);
  }
}
//store all the props in an array
const keysArr = Object.keys(pitBull);

//know if a prop or method is in an obj
if ('numLegs' in pitBull) {
  console.log('pitBull has numLegs');
}

//ABSTRACTION
//hide from outside properties and methods
function Circle(radius) {
  //only for internal object use
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimunLocation = function (factor) {};

  //external accesibility
  this.radius = radius;
  this.draw = function () {
    computeOptimunLocation(0.1);
    console.log('draw');
  };

  //get the value of the hidden properties or set a new value
  Object.defineProperty(this, 'defaultLocation', {
    get: function () {
      //getter: to reed a property from outside
      return defaultLocation;
    },
    set: function (value) {
      //setter: to set a property from outside
      if (!value.x || !value.y) {
        //we can validate that property so it dont mess up our code
        throw new Error('Invalid location.');
      }
      defaultLocation = value;
    },
  });
}

//mixin -> mixin allows not related obj to use a common function
let flyMixin = function (obj) {
  obj.fly = function () {
    console.log('Flying, wooosh!');
  };
};
flyMixin(bird);
flyMixin(plane); //both objects will have de function fly()
console.log(bird.fly(), plane.fly());

//Immediately Invoked Function Expression (IIFE)
(function () {
  console.log('Chirp, chirp!');
})(); //it execute as soon as it is declared.

//group mixins into a module
let motionModule = (function () {
  return {
    glideMixin: function (obj) {
      obj.glide = function () {
        console.log('Gliding on the water');
      };
    },
    flyMixin: function (obj) {
      obj.fly = function () {
        console.log('Flying, wooosh!');
      };
    },
  };
})();

//keys / values / entries -> Object method returns an array of a given object's own enumerable property names,
const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};
console.log(Object.keys(object1)); // expected output: Array ["a", "b", "c"]
console.log(Object.values(object1)); // expected output: Array ["somestring", 42, false]
console.log(Object.entries(object1)); // expected output: Array [["a","somestring"],["b", 42],["c", false]]

//clousure -> getters and setters
var Person = function (firstAndLast) {
  let full = firstAndLast.split(' ');
  let [firstName, lastName] = [...full];

  //getters
  this.getFirstName = function () {
    return firstName;
  };

  //setters
  this.setFirstName = function (first) {
    firstName = first;
  };
};
var bob = new Person('Bob Ross');
bob.setFirstName('Curry');
console.log(bob.getFirstName());

//Convert paired arrays in to an object
const exArr = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
];

const arrToObj = (arr) => {
  const res = arr.reduce((acc, it) => {
    return {
      ...acc,
      [it[1]]: it[0],
    };
  }, {});
  return res;
};

const ej = arrToObj(exArr);
console.log(ej);
