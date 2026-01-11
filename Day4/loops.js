// DO WHILE AND WHILE LOOP
do {
    console.log("dowhile")
    break
} while (true)

while (true) {
    console.log("do")
    break
}

// no braces is called naked one pala

// while (true) console.log("hi") //naked condition, but its infinite on this one

//syempre tig once lang ky gina break man ang loop


// FOR LOOP
//cant use const on for loop condition variable since youll change it right
for (let i = 0; i < 5; i++) {
    console.log(i)
    // break
    continue
}

// FOR EACH LOOP
const arr = [6, 7, 8]
// const arr = "hello" //yeah string is just an array of chars
for (let value of arr) {
    console.log(value)
}

for (let [index, value] of arr.entries()) { //entries() function return also the index not just the value, but useless since thats the point of for loop
    console.log("index: " + index + " value: " + value)
}

// of keyword on js, in keyword on python, in keyword here is diff from python