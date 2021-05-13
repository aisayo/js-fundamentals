// When a JavaScript engine executes a script,
// it creates execution contexts.
// Each execution context has two phases:
// the creation phase and the execution phase.

// -----------------------------------------------------------------

// First phase: Creation Phase

// During this phase, the compiler will go through a series
// of creations, but important take away is that references
// to any variables or functions will be stored in memory.
// We will later learn more about the other stuff that happens.

// Example:

function testingExecution() {
  console.log(test);
  var test = "Is this working?";
}

// Theoretically how it looks during the first phase:

function testingExecution() {
  var test; // variable declarations get 'hoisted'
  console.log("creation phase", test);
  test = "Is this working?";
}

// -----------------------------------------------------------------

// Execution Phase:

// This is the second phase that will then assign values to variables
// and execute any functions.
// It will execute logic in functions, line by line
function testingExecution() {
  var test; // variable declarations get 'hoisted'
  console.log("creation phase", test);
  test = "Is this working?";
  console.log("execution phase", test);
}
