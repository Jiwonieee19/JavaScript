// basic prmitive types

string // " " ' ' ` `
boolean // true false
number // 9 - 18 0 34.1416
undefined // this is the data type, adn the value is also the undefined, used to initialize w/o data types fow now, but will be latur on
// is a condition where espression does not have a correct value, but is syntactically correct
null // used when u explicitly set something as nothing
BigInt // used the same way as "long" when the number/int is greater than its limit

symbol // It provides a unique and immutable identifier, primarily used to create non-enumerable object property keys to avoid name collisions. 
// A simple unique symbol

//E.G.
const mySymbol = Symbol();

// A symbol with a description
const id = Symbol("id");

// Two symbols with the same description are still unique
console.log(Symbol("id") === Symbol("id")); // false
