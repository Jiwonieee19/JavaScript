/*
&&
||
!
*/

console.log(true && false)
console.log(true || false)
console.log(!(true && false))

//logical operators here become weirder if using/comparing two diff type

console.log("hello" || true) //truthy value (string) and loosely equivalent to true, if string is empty then false, returns hello (if one is true, we are going to display the other)
console.log("" || true) // returns true since string is empty
console.log("" || false) // returns false since string is empty, hence both are false

console.log(true && "hi") // (if both are true, display the string/non boolean) returns hi
console.log(true && "") // (if both are true, display the string/non boolean) returns empty
// both arent returning boolean hence cant be used in coditions like ifelse

console.log(false && "hello") //returns false since we already have a false
console.log(!false && "hello") //now this returns the string since its true, and it may be useful on react daw

console.log(Boolean("hello")) //to convert anything to boolean
var x = Boolean("hello")
if (x && true) {
    console.log("NANDITO")
}

// END POINT, CAREFUL ON USING BOOLEAN MIXED NON BOOLEAN ON STRING OR OTHER TYPE COZ IT MIGHT RESULT TO WEIRD LOGIC