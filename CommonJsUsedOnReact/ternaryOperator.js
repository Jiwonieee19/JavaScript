//rather than full of ifelse condition, ternary comes in, dati pa not just in this language

//coding on react should be as low amount of lines as possible
//react allows u to write js inside html but its jsx file
//its nice that react can write logical things useful for ur UI

if (true) {

} else {

}

let age = 22;
let name = "Jane Doe";

if (age > 20) {
    name = "Hi"
} else {
    name = "Hello";
}
console.log(name);
//this one takes a lot of space
// with ; or without still works, maybe if its not intersecting of other function/important line

//3 ternary operations

//1st, &&(and) means if true, then its value is this shit
let name2 = age > 10 && "And";
console.log(name2);

//2nd, ||(or) means if false, then this is it
let name3 = age < 10 || "Or";
console.log(name3);

//3rd, the real deal
let nameReal = age > 20 ? "greater" : "lesser";
console.log(nameReal);


//in REACT application
const myComponent = () => {
    return age > 200 ? <div> True </div> : <div> False </div>;
};