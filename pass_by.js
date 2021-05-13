// Pass by Value and Pass by Reference in Javascript
// -----------------------------------------------------------------
// What is a pass by value?

// In Pass by value, function is called by directly passing 
// the value of the variable as an argument. 
// So any changes made inside the function does not affect 
// the original value.
// Parameters passed as an arguments create its own copy. 
// So any changes made inside the function is made to the 
// copied value not to the original value.

// Primitives will be passed by value.

// Example:

num = 10 

function doubleNum(x) {
    x = x + x 
    return x
}

// When we invoke doubleNum, it will return 20 
// But when we check the value of `num` it still remains 10 
// It has not been mutated

// -----------------------------------------------------------------

