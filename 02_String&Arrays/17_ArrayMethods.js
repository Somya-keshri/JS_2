// ARRAY METHODS

let num = [1, 2, 3, 4, 5]
console.log(typeof num)
console.log(num)

let b = num.toString()   // Converts array to string
console.log(b, typeof b)

let c = num.join("_")    // Joins all the elements of an array into a string
console.log(c, typeof c)

let r = num.pop()    // Removes the last element from an array
console.log(r, num)
// it will return the removed element

let p = num.push(15, 47)   // Adds a new element at the end of an array
console.log(p, num)
// it will return the new length of the array

let s = num.shift()   // Removes the first element from an array
console.log(s, num)
// it will return the removed element

let q = num.unshift(89)   // Adds a new element at the beginning of an array
console.log(q, num)
// it will return the new length of the array