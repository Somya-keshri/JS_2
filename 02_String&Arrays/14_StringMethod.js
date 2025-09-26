let name1 = "Jerry"
let name2 = "Tom\""
let friend1 = "Daisy"
console.log(name1)
console.log(name2)
console.log(name2.length)

console.log(name1.toUpperCase())
console.log(name2.toLowerCase())
console.log(name1.slice(1, 3))    // (start, end)  er
console.log(name1.slice(1))
console.log(name1.replace("J", "K"))

console.log(friend1.concat(" is a friend of ", name1))

let friend2 = "     Mickey"
console.log(friend2)
console.log(friend2.trim())    // Remove extra spaces

console.log(name1.charAt(2))
console.log(name1.indexOf("r"))   // First occurrence
console.log(name1.lastIndexOf("r")) // Last occurrence

console.log(friend1[0])
console.log(friend1[1])
console.log(friend1[2])
console.log(friend1[3])
console.log(friend1[4])
console.log(friend1[5])   // undefined

console.log(friend1.startsWith("D"))  // true
console.log(friend1.endsWith("y"))    // true

let batchmates = "Harry, Ron, Hermoine, Draco"
console.log(batchmates.split(","))   // Split by comma and return array
let fruits = "Apple " + "Banana " + "Mango"
console.log(fruits)