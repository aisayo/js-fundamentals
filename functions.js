// Functions

// Functions are the core of JavaScript
// They are just methods that contain some type of behavior
// Very similar to methods in Ruby, with some differences
// To run a function, it must be ‘invoked’
// Invoking a function involved calling the name of the function with parenthesis afterwards

// -----------------------------------------------------------------

// How a function looks:

function methodName() {
  //logic goes in here
}

// -----------------------------------------------------------------

// How a function works:

function helloWorld() {
  return "Hello World!";
}

// Need to 'invoke' the function to make it run:
helloWorld(); // parenthesis after function name will invoke

// When a function hits a line with `return`,
// it will immediately stop execution and provide a return.
// If `return` is never used, the function will return undefined

// -----------------------------------------------------------------

// Functions within functions

function helloWorld() {
  let name = "Aysan"
  console.log("Hello World!")
  return function greeting() {
    console.log(`My name is ${name}`)
  }
}

// Knowing what we know about Execution Context
// What will line 49 return?

function helloWorld() {
  let name = "Aysan"
  console.log("Hello World!")
  console.log(childFunction)
  return function greeting() {
    console.log(`My name is ${name}`)
    let childFunction = "Im inside the second function"
  }
}