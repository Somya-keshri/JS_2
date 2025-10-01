let arr = [45, 23, 31]
console.log(arr)

// map method
let a = arr.map((value, index) => {
    console.log(value, index)
    return value + index
})
console.log(a)   // It will create a new array with each element modified by the function
console.log(arr)   // Original array will remain unchanged

// filter method
let arr2 = [25, 30, 35, 40, 45]
let a2 = arr2.filter((a) => {
    return a < 40
})
console.log(arr2)   // Original array will remain unchanged
console.log(a2)   // It will create a new array with elements that satisfy the condition

// reduce method
let arr3 = [1, 2, 3, 4, 3, 5]
let newarr3 = arr3.reduce((h1, h2) => {
    return h1 + h2
})
console.log(newarr3)   // It will return a single value which is the sum of all elements