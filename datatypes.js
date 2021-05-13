// JavaScript DataTypes

// -----------------------------------------------------------------

// Primitive Types

// What is a primitive? 
// Primitives are anything that is not an object and does not have its own methods
// In JS there are 7 types: strings, boolean, null, numbers, undefined, symbol
// Everything else is an object: arrays, objects(known formerly as hashes in ruby)


// String

// 3 ways to write strings: 

// double quotes:
    "This is a string"

// single quotes:
    'This too is a string'

// backticks:
    `this is a ${type}`

// Backticks are mainly used for string interpolation as seen here
// String interpolation is the same as Ruby, only a $ instead of a #

// -----------------------------------------------------------------

// Number 

// Integer:
3 
4
5

// Float:
3.14
4.20
5.25

// Negative:
-1
-6
-10
    
// NaN
    // Computations that cause a numerical error
        "testing" * 2

// parseInt vs parseFloat
parseInt("5") // 5
parseInt("test12") // NaN
parseInt("123miccheck") // 123
parseFloat("3.14") // 3.14
parseInt("3.14") // 3

// -----------------------------------------------------------------

// Boolean

// Things that return false values:
false
""
undefined
0
NaN
null

// -----------------------------------------------------------------

// Symbol

// Used for keys in an object

{title: "Gone With the Wind"}
// title: is a symbol

// -----------------------------------------------------------------
// Undefined

// -----------------------------------------------------------------

// Null


// -----------------------------------------------------------------

// Everything else in JavaScript is an object

typeof [0,1,2]
typeof {name: "aysan"}


// Fun challenge:
// what will the following return?

typeof typeof 0 