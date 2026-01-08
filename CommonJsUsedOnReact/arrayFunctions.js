//function/method of array that is used commonly
// .map() and .filter() are the 2 of most common array functions, .reduce() is somewhat common too

let names = ["Joy", "To", "The", "World"];

// map()
//if i want to add a "1" on every value of name here, for loop may help but its a lot of lines, instead
namesUpdated = names.map((name) => { // this means the namesUpdated will have this updated array
    return name + "1"; //a for each loop like, and then return every "name(each element variable) as whatever u like"
});

console.log(namesUpdated[2]);

//when u have list on REACT, useful on putting elements on any components
namesUI = names.map((name) => {
    <h1> {name} </h1>
});



let names2 = ["Joy", "To", "The", "World", "Joy", "Joy"];

// filter()
//filtering or searching on a list/array
names2Upd = names2.filter((name2) => {
    return name2 !== "Joy"; //this will only return if its not Joy means on array names2Upd theres no Joy in there, just like my life
});

//ill learn reduce() myself
