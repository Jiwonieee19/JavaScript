// + //addition
// - //subtraction
// / //division
// * //multiplication
// ** //exponentia
// % //modulus
// -- //decrement
// ++ //increment

// +=, -=, /=, *=

// WHAT HAPPEN IF U USED OPERATORS ON DIFF TYPES? ITS ERROR ON OTHER LANGAUGE BUT ITS A WEIRD THING ON JS
var x = 9
var y = "18"
var z = true

console.log(x + y) //will return a string with 918 value
//to get the real result on this one, if the string is only a number, then use type conversion
console.log(Number(y) + x)
y = "2zxc" //if 2xcse3, it will only return the first numbers it see, and cut it if theres a string
console.log(parseInt(y) + x + " Parsing") //parseint will ignore all NaN and return only the number
console.log(x * y) //if multiplication, the js will try to convert the string into number, this return a number, same with - and /
//but is the string contains a char that is not a number, this will return NaN means Not A Number
console.log(x + z) //recall that on binary, true is 1 and false is 0, thats why this is 10
console.log(x + Number(true))

console.log(x.toString())
console.log(String(x))
x = x + ""
//same ways on Java

// THIS IS CALLED TYPE COERCION, AN IMPLICIT TYPE CONVERSION WHEN U TRY TO DO AN ARITMETIC OPS ON DIFF TYPES