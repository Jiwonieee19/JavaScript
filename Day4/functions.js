// WAYS OF DEFINING FUNCTIONS

function greet(name, age) { //those are parameters ofc
    console.log("HAPPY BDAY" + name)
}

function returnSomething(age) {

    var anything = true; //can be a number, string, etc

    if (age > 10) {
        anything = false
    }
    return anything
}

// expressing a function
const greet2 = function (parameter) {
    console.log("hi")
}

//relatively new type of function in js with es6 know as ARROW function WHICH IS MAO GINAGAMIT SA REACT
const greet3 = (parameter3) => { parameter3 + " body of function" }
const greet4 = (parameter4) => { return () => parameter4 }

greet4("Hi")() //returns the Hi 

// REST PARAMETERS allows a function to accept an INDEFINITE number of ARGUMENTS as an ARRAY
function addNums(...number) {
    total += number
    return [1, 2]
}
//when it comes to returning value, u can return single value or multiple