// defining variables in js 

var x = 0
// naming rules applied the same from other languages, no special char, space, or start with a number (1x),
// the convention is actually used camelCase rather than snake_case like python

// VAR IS A VARIABLE THAN CAN CHANGE 
var changeable = 0;
changeable = "hatdog"
console.log(changeable)
// this is valid, it will not give any issue

// VAR = FUNCTION-SCOPED, and it is HOISTED
// HOISTING is the mechanism where variable and function declarations are conceptually moved to the top of their containing scope during the compilation phase, before the code is executed.
// means you can use the variable/function before the line it is declared

function test() {
    console.log(xx) //this will result to undefined since hoisted means the var declared will be initialize on the top of function, but the declaration is still at the line where it is declared
    var xx = 0;
    console.log(xx) //this is now result to 0
}

test()

// let y = 0
// // LET = BLOCK-SCOPED, and not HOISTED
// // same as var but the only diff is that let keyword is limited to the specific block, statement, or expression where it is defined.
// // is is hoisted but only to its block
// if (true) {
//     let newY = 15
// }
// console.log(newY) //will return undefined

// const z = 0
// // CONST = BLOCK-SCOPED, and not HOISTED
// // CONST STANDS FOR CONSTANT, the variable declared on const cannot be changed latur on
// z = 10 // will return an issue/error
// //if const is declared on mutable type like array, you can change the elements and so on but the name and its value (the array) arent changable
// const arr1 = [12, 13, 14]
// arr1[1] = 99 //this is fine
// console.log(arr1[1])
// arr1 = "changing array to string" //error


//TAE IS THIS A THING SA JS, COMMON SENSE NLNG MAN NI SA JAVA IF GI INITIALIZE INSIDE SA BLOCK THEN SA BLOCK RA MAGAMIT, THOUGH SA JS IT IS MORE MANIPULATABLE IN THIS WAY