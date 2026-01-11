// node .\arrayDestructuringAndSpread.js

// DESTRUCTURING ALLOWS U TO UNPACK VALUES FROM AN ARRAY
const [x, y] = [1, 2, 3]
console.log(x, y) //this return only 1 and 2
const [w, ...z] = [5, 6, 7, 8]
// const [w, w2, ...z] = [5, 6, 7, 8] //this is also possible
console.log(w, z) //return 5 as w and the rest as z
//w will be a number here while z will be an array since it receives more than 1 number

// SPREAD OPERATOR (...)
const q = [1, 2, 3]
const t = q
t.push("check")
console.log(q, t)
//even though logically q != t but t == q, after changing/adding to t, it also reflects to q but that will only happen if u used pread (...)

const q2 = [1, 2, 3]
// const t2 = [...q2]
const t2 = [5, 4, 6, ...q2] //can also concatenate inside it
t2.push("try")
console.log(q2, t2)
//now this is the effect of spread, t2 = q2 but q2 != t2