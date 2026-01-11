// JSON = JavaScript Object Notation

//covered just some main feature of JSON

const obj = {
    name: "Ryan", //property name, value ryan
    age: 23,
    isTired: true,
    intro: introFunction(), //can also put a function as value

} //anything inside a braces in an object,
// OBJECT HAVE PROPERTIES ASSOCIATED WITH VALUES

function introFunction() {
    console.log("Hi")
}

// ACCESS PROPERTIES ON OBJECT, OOP MANIS JAVA
console.log(obj.name)
console.log(obj["name"]) //this one too works the same on the obj.name
obj.name = "Huhu"
obj.newProps = [1, 2, 3] //can also add a new property directly , bawal mn guro nis java


// CAN ALSO HAVE AN OBJECT INSIDE AN OBJECT
const objMain = {
    name: "Imy",
    age: 22,
    subObj: { //property subObj, value is an Object
        hatdog: "tenderJuicy",
        siomai: "friedSiomai",
    }
}

console.log(objMain.subObj.hatdog)
delete objMain.age
console.log(objMain.age + " if naa pa") //returns undefined ofc ky pede daay mag delete ug properties sa js, very flexible ang js object

console.log(Object.values(objMain)) // the Object.values(variableOfObj) returns all of its value as array, and for keys it is Object.keys(objName)

for (let key in objMain) { // of for array, in for objects
    console.log(key) //print each of it, since Object.keys() return an array
}

// CAN ALSO COMBINE OBJECTS?! USING SPREAD OPERATOR

const obj1 = {
    name: "Ry",
    age: 18,
    career: {}
}

const obj2 = {
    hairColor: "Mlue",
    name: "Recent One", //if dupli, the last one added override the first
    grade: [1, 2, 3],
}

const objCombined = { ...obj1, ...obj2 } //if dli spread and isa, it will return just the object, not inherit/get them like spread does
console.log(objCombined)

objCombined.career.info = "tech"
console.log(obj1.career.info)
objCombined.grade.push("MO REFLECT SD SA PARENT/GICOPYHAN")
console.log(obj2.grade) //notice nga wla gi push sa obj2 nga array but still nag reflect siya whtever the changes sa combined
// but if you change sa not combined obj, it will not reflect sa combined
obj1.age = "20"
console.log(objCombined.age) //see, its still 18

// coz of the primitive and reference type, array and function are reference type means mutable, while string, number, or any primitve are immutable

// Destructuring on ojbects
const { hairColor, name } = obj2 //this means it will only get those properties on that object
console.log(hairColor, name)

// THERE ARE STILL MORE STUFF/FUNTIONS ON JS OBJECTS