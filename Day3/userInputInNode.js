//this method is specific for the back end, will not work on browser

//to collect input on browser, use prompt function, this will automatically pop up on the webpage
// prompt()

//install NPM = Node Package Manager, to handle diff dependencies

//to create a new npm porject, write
// npm init -y
//this will create a package.json file to manage diff dependencies and their version and more

// for prompt, write npm install prompt -sync, but first install the npm to make this work, this will create a package-lock.json

// to use prompt properly after installing this
const prompt1 = require("prompt-sync")() //this is how you import on js, and this will return a function thats  why it has () ,IMPORT PROMPT
const tryPrompt = prompt1("Type Here: ") //can now be used by calling its variable, type on terminal and it will return what you typed ,USED THE PROMPT FUNCTION
console.log(tryPrompt)
//this is just same on nextLine in Java 