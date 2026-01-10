/* 
== equality / loose equality
=== strict equality
!= not equal / loose not equality
!== strict not equal
< lessthan and so on,
>
<=
>= and all of these 4 types are loose operators
*/

//loose equality means that the js will try to convert the other type of not same, into a data type that can be compared
if ('1' == 1) {
    console.log("This is loose equality")
}
if ('1' === 1) {
    //will not go here becoz not true
} else {
    console.log("This is strict equality")
}

console.log(null == undefined) //true since these 2 are loosely equivalent, and these 2 are not equivalent to any boolean value, hence it will always return false if compared to them
console.log("" == 0) //this is true coz false = 0, and empty DECLARED string = 0, same too on empty array
console.log("1,2" == [1, 2]) //this is true coz of js coercion  
console.log('3' < 1) //this return false 

// strict equality / strict not equality works on the standard == and != on java

//BUGS MIGHT APPEAR FREQUENTLY IF THESE ARE NOT USED PROPERLY, === == !== !=