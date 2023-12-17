/**
 * @javascript function define way
 */

// function declaration
function hello() {
  console.log("Hello World!");
}
hello(); // function invocation

// function expression
const fnExpression = function () {
  //function store in a variable
  console.log("Hello World!");
};
fnExpression(); // function invocation

// Named function
const namedFuncion = function hello() {
  //It's recommended es lint
  console.log("Hello World!");
};
namedFuncion(); // function invocation

// arrow function
const arrowFunction = () => {
  console.log("Hello World!");
};
arrowFunction(); // function invocation

// anonymous function
const anonymousFunction = function () {
  return () => {
    console.log("Hello World!");
  };
};
anonymousFunction()(); // function invocation

// function constructor
const newFunction = new Function(
  "a",
  "b",
  `
return a+b`
);
newFunction(
  10,
  5
)(
  //invocation

  // IIFE function
  function () {
    console.log("Hello world!");
  }
)();

//function define in a object called method

const object = {
  fn: function () {
    console.log("Hello World!");
  }, //method

  fn() {
    console.log("Hello World!");
  }, //es6
};
