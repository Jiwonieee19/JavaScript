// WAYS OF DECLARING MAPS, SO SET AND MAP IN JS ARE JUST HASHSET AND HASHMAP ON JAVA
const Map0 = new Map()
const Map1 = new Map([[1, "1"], [2, "2"]]) //map consist a key and a value, diff from array that uses index 

Map1.set(3, "3") //adding a map
Map1.delete(1) //using a key here, not value(set) nor index(array)
Map1.get(2)
Map1.has(5)
Map1.clear()
Map1.size
console.log(Map1.get(2))

for (const [key, value] of Map1) {

}

for (const key of Map1.keys()) { //works on values only too, Map1.values()

}

// make an array of this map
const arr1 = Array.from(Map1)
const arr2 = [...Map1]
// this value of array looks like this [1, "1"] , [2,"2"], and so on