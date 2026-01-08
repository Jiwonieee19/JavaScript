
function doSomething() {
    console.log("hi");
    //common practice
}

doSomething()

const doSomething = () => {
    console.log("hi");
    //can also use let , var, but const is the Standard
    //we may think daw that this is more like complex, but this writing compensate in other ways, 1 is on export
}

let doSomething = () => {

}

var doSomething = () => {

}

export default function doSomething() {
    //for exporting
}

export const doSomething = () => {
    //mao dw ni compensation, but anwys const is the standard notation in many ways daw
}

import doSomething from './sample.js';

doSomething

//let = changable variable and can be initialize only without declaring a value yet
//const = is more like a "final", you cant change the value here and should declare the value during initialization, mostly used for function

//function foo() {} (Declaration) - can be reassigned to a diff value
//const foo = () => {} (Arrow Expression) - canT be reassigned to a diff value


//in REACT sample down here

const myComponents = () => {
    return <div> Something Here </div>
}

//normal js function
{/* <button onClick={nameOfFuntionHere}>

</button> */}

//anonymous react function (no name function, just the function itself)
<button onClick={() => {
    console.log("wtf");
}}>

</button>;