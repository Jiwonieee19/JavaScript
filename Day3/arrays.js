// node .\arrays.js
var arrV = []
let arrL = []

// even if array is initialized in const, it is still mutable, since it would just mean ur modifying the existing array, not reassigning its type
const arrC = [1, 2, true, "hi"] // array value do not need to be in the same type
const arrC2 = new Array(5) // can also be a variable without an amount yet and that will become a dynamic array
console.log(arrC2) // returns '<5 empty items>'
console.log(arrC2[1]) // returns 'undefined'
var x
const arrayC3 = new Array(x) // like this one

const arrayC4 = Array.from("hello") // this function returns an array of char of the string hello, and a lot of stuff can be done in this function
arrayC4[0] = "y"
console.log(arrayC4)
console.log(arrayC4[arrayC4.length - 1])
console.log(arrayC4[arrayC4.length]) //instead of throwing arrayboundsindexerror here in java, its just undefined in js

arrayC4[arrayC4 + 5] = "test error type inside []" //it should be but instead js read the inside of [] as true and make the 6th value into y,e,l,l,o5: 'test'
arrayC4[arrayC4.length + 5] = "test" //isntead of throwing an error here, it adjusted the size of array and inserted an empty value on the gap
console.log(arrayC4)
//VERY WEIRD, NOT EVERYDAY U'LL ENCOUNTER ON OTHER LANGUAGE

//lez check other methods/function on arrays
arrC.push("last value") //pushes a value on the last index of array
var popReturned = arrC.pop() //what this do is that, removes the last elements and value, then return it
console.log(popReturned)
arrC.shift() //shift remove the 1st element and its value, then return its value
arrC.unshift("hatdog") //this insert a value on the very first element and adjust the array size ofc


console.log(arrayC4.indexOf("l")) // this return the index on of the searched value, but just the first occurance of the value, if its dupli, then its ur problem chrt
console.log(arrayC4.lastIndexOf("l")) //this will return the index of the last l on the arrays, means the if dupli or more, return the index of the last one
console.log(arrayC4.includes("R")) //this will return boolean base on if the value exist on that array or not

const arrayC5 = arrC.concat(arrayC4) //this will combine the 2 arrays, arrC values is the first to enter the arrayC5
const str = arrC.join("|") //this will join all the value with | in between depends on waht you put, and returned as string if () is empty comma (,) is the default
console.log(str)
const arrayC6 = arrC.slice(0, 3) //this act the same on .substring(1,3) of java, the last number is to where the index end but not included
console.log(arrayC6)
const arrayC7 = arrC.splice(1, 2) //first argument here is where index to start removing, the 2nd argument is how many elements to be removed, then return those removed item
console.log(arrayC7)
console.log(arrC)
