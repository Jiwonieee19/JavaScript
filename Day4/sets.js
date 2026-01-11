//WAYS OF DECLARING A SET

const mySet = new Set([1, 2, 3]) //direct

var set = [4, 5, 6]
const mySet1 = new Set(set) //from variable

const emptySet = new Set()
emptySet.add(2) //add a value
emptySet.delete(1) //delete a value
emptySet.has(1) //return boolean, its a search
console.log(emptySet, emptySet.has(1))
emptySet.clear()
emptySet.size
for (const value of emptySet) { //of for set
}

// convert sets to array
const arr = Array.from(emptySet)
const arr1 = [...emptySet]
const arr2 = [...new Set(1, 2, 3)]

// diff between sets and array: sets does not allowed dupli, so set is just a hashset on java, u cant forloop it but can foreachloop