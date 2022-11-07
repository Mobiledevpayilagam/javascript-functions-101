//JavaScript functions 101

// Function declaration
// function function_name(argument_1, argument_2, ...) {
//     //computation
//     return result
// }

// Function invocation
// function_name('A', 'B', ...)

// JavaScript functions are "first-class" objects - they can be stored in a variable, objects or passed as parameters

//Basic JavaScript function syntax
function add(numberA, numberB) {
  console.log(numberA + numberB);
}

add(10, 15);

//JavaScript function using arrow syntax
const subtract = (numberA, numberB) => {
  console.log(numberA - numberB);
};

subtract(20, 10);

//JavaScript function using arrow syntax with implicit return
const multiplication = (numberA, numberB) => numberA * numberB;

console.log("Multiplication result", multiplication(10, 10));

//JavaScript function with arguments that takes default value
const findRoot = (aNumber, root = 2) => {
  return Math.pow(aNumber, 1 / root);
};

const cubeRootOfEight = findRoot(8, 3);
console.log("cube root of eight is", cubeRootOfEight);

const squareRootOfFour = findRoot(4);
console.log("square root of four is", squareRootOfFour);

//JavaScript pure function
// pure function returns the same result to a given set of arguments under any circumstances

//Example of pure function
const guessTheResult = (aNumber) => {
  return aNumber * 100;
};

const anotherGuessTheResult = (aNumber) => {
  return aNumber * Math.random() * 100;
};

console.log("Result of guessed number", guessTheResult(10));
console.log("Result of another guessed number", anotherGuessTheResult(10));

//Take the above two functions for instance
//Both take the same argument that is 10 yet they give different results for every invocation
//Therefore guessTheResult is a pure function but anotherGuessTheResult is impure

//Immediately Invocated Function Expression
console.log((() => "greetings")());

//JavaScript anonymous function

//Javascript async function
const waitForPromiseWithResolve = async () => {
  return await new Promise((resolve, reject) => {
    setTimeout(resolve({ data: "Promise resolved" }), 2000);
  });
};

waitForPromiseWithResolve()
  .then((res) => console.log("Res", res))
  .catch((e) => console.log(e));

const waitForPromiseWithReject = async () => {
  return await new Promise((resolve, reject) => {
    setTimeout(reject({ error: "Promise rejected" }), 2000);
  });
};

waitForPromiseWithReject()
  .then((res) => console.log(res))
  .catch((e) => {
    console.log(e);
  });

//Callback functions
//Lambda functions
//Closure
