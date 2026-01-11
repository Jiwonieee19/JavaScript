// map() , filter() , reduce() HAHAHAHA tama dyud daay tong first vid

// map() apply functions to every single value inside the array
const arr = [1, 2, 3, 4]
const double = arr.map((num) => num * 2)
console.log("MAP(): " + double) //[2,4,6,8]

const users = [ //nested properties
    { name: "Huhu", age: 21 },
    { name: "Alice", age: 23 }
]
//so {} for single, [] for multiple 

const usernames = users.map((user) => user.name) //array of names inside that object
console.log(usernames)



//reduce() used when u want to take an array and reduce that down to single value
const numbers = [5, 6, 7]
const sum = numbers.reduce((acc, num) => acc + num, 0) //acc means accumulator, 0 here is where the acc value starts from SHIT JS IS WEIRD
// and acc + num returns an acc with added num, then why its not  written as acc += num
console.log(sum)



//filter() works like map() but the diff is that it just take all the values from an array that match a specific criteria/function means if true or not
const numbersToFilter = [1, 2, 3, 4, 5, 6]
const evenNums = numbersToFilter.filter((num) => num % 2 === 0) //returns boolean
console.log(evenNums) //create an array with value from array that is true to the function

// REACT USES MAP() THAT RETURNS COMPONENTS ON THE FUNCTION TO DYNAMICALLY CHANGE/RENDER THE SCREEN/UI