// Variables

// Like containers that contain the value of something
// Always store a value you anticipate will be used later into a variable
// Key words to declare a variable are `var`, `let`, `const`
// Difference between declaring a variable and defining:
// declaration brings the variable into existence, definition gives it purpose
// When defining a variable, it will return undefined in the console

// -----------------------------------------------------------------

// var:

// var will allow reusing a variable and redefining it with no errors
// `var` is no longer used in new JS codebase
// var will get hoisted

// Example:
var word = "test";
var word = "testing";

// -----------------------------------------------------------------

// let:

// let will allow redefining the value of a variable
// let will not get hoisted

// Example:
let fluffy = "fluffy";
let fluffy = "not so fluffy"; // will throw an error
fluffy = "not so fluffy" // will redefine the value of fluffy

// `let` allows you to declare a variable, then later define it

// Example:
let username;
username = "aisayo";

// Let is also block scoped

// Example:
    var x = 1;
    if (x === 1){
        var x = 2;  // same variable!
        console.log(x);  // 2
    }
    
    console.log(x);  // 2

  
    let x = 1;
    if (x === 1){
        let x = 2;  // different variable!
        console.log(x);  // 2
    }
    let x = 10
    
    console.log(x);  // 1

// -----------------------------------------------------------------

// const:
// const is used when the value of a variable should NOT change
// const will not get hoisted

// Example:
const BASE_URL = "www.google.com";
const BASE_URL = "www.yahoo.com";

// What is hoisting? Check out execution_context.js
