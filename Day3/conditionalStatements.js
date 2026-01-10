// normal ifelse statement
var x = true

if (x === true) {

} else if (x === false) {

} else {

}

//unique thing on js ifelse
if (x === true) console.log("No need braces if oneline only") //UNIQUE DAW NGA IN ANI NAMAN PUD ANG JAVA
else console.log("ELSE") //no braces too on catching the ifs
if (true) console.log("Inside if")
console.log("Outside if, its already in main line") //not allowed and 2 function inside ifs with no braces, indention doesnt matter here too

//ternary condtion duhh naa ndyud daay tanan sa CommonJsUsedOnReact, this is more on for not so familiar peps sa codes
const cond = x !== true ? x = 0 : x = 10;
const cond1 = x === true ? "True" : "Not True";
//yati bawal ternary sa if dafak?
// if (x !== true) ? x = 0 : x = 10;


//normal switch statement
var y = 10

switch (y) {
    case 10:
        console.log("case10")
        break; //no break will cause a fall through which is common on switch
    case 11:
        console.log("case11")
        break //no : on break still works
    default:
        console.log("NADA")
        break;

}

//no unique shits on js switch