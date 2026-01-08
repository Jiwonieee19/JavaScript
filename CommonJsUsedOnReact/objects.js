//all usefuls stuff related to objects on his own opinion btw
//objects on java, dictionary on python, A data structures made for specific usage of a language

//Objects store data in key-value pairs. They are used to represent entities with properties.

//normal js object
const person = {
    name: "Normal",
    age: 12,
    isMarred: false,
};

//normal way of creating varaible that stores specific values on those objects
const name1 = person.name;
const age1 = person.age;
const isMarred1 = person.isMarred;
//its fine but its taking a lot of space

// objects used alot on REACT

//Destructure, making it on 1 line only
const { name, age, isMarred, samplenothere } = person;
//storing variables from person with same on the const
console.log(name);
console.log(samplenothere); //will result to "undefined"

nameSample = "Hi";

const tao = {
    name: nameSample, //instead of this, we can write it simple like this below, a shorthand notation
    nameSample, //a key naemsample will have a value of the variable namesample
    age: 23,
    isMarred: true,
}

const person2 = { ...person, name: "ChangeNameOnly" }; //this one make a copy of person then change the name into that afterwards
console.log(person2.name);

const person3 = { ...person, lastName: "ChangeNameOnly" }; //if lastname isnt in person, it adds to the person3  key with a value u declare
console.log(person3.lastName);
//its just adding keyvalue on object, and may update if the key exist

//BOTH OF PERSON2 AND PERSON3 WORKS THE SAME WAY ON ARRAYS

const randomName = ["Hi", "Hello", "Hatdog"]
const randomName2 = [...randomName, "Hayst"]
console.log(randomName2[3])
