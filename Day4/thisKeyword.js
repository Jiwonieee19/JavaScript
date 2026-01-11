// its important bcoz this function differs from the arrow function in their SCOPING and ACCESSING this variable
// this refers to the object which something is acting upon

name = "Arrow Function Name"

const person = {
    name: "First",
    age: 22,
    greet() {
        console.log("HI " + this.name)
        console.log(`Hi ${this.name}`)
    },
    hatdog: function () {
        console.log("HAHATDOG")
    },
    greetArrow: () => { //ARROW FUNCTION USES THIS KEYWORD
        console.log("Arrow this keyword: " + this.name)
    }
}

console.log(person.greet) // output [function: greet]

console.log(person.hatdog) // same output [function: hatdog]
console.log(person.hatdog.info)

person.greet()
person.hatdog()

// THIS keyword DOESNT work on arrow function coz of how this keyword is inherited
person.greetArrow() //results to undefined
// THE REASON IS THAT ARROW FUNCTION INHERIT THE THIS KEYWORD AT THE TIME WHICH TEY ARE DEFINED, NOT WHEN THEY ARE CALLED