let num = [1, 2, 3, 4, 5, 6, 7]
console.log(num.length)
delete num[0]   // It will delete the element but the length of the array will remain same
console.log(num.length)
console.log(num)   // It will show 'empty' in place of deleted element

let num1 = [1, 2, 3]
let num2 = [11, 12, 13]
let num3 = [21, 22, 23]
let newArray = num1.concat(num2, num3)   // It will merge two arrays
console.log(newArray)
console.log(num1, num2)   // Original array will remain unchanged

// sort method
let marks = [68, 75,  83, 95, 48, 91]
marks.sort()
console.log(marks)
let compare = (a, b) => {
    return b-a
}
marks.sort(compare)   // For descending order
console.log(marks)

// reverse method
num2.reverse()
console.log(num2)

// splice method
let months = ["Jan", "March", "April", "June", "July"]
months.splice(1, 0, "Feb")   // It will add an element at index 1
console.log(months)
let deletedArr = months.splice(4, 1, "May")   // It will replace an element at index 4
console.log(months)
console.log(deletedArr)   // It will return the deleted element

// slice method
let fruits = ["Apple", "Guava", "Mango", "Banana", "Orange"]
let newFruit = fruits.slice(2)      // It will create a new array from index 2 to end
console.log(newFruit)
let newFruit1 = fruits.slice(1, 4)     // It will create a new array from index 1 to 3
console.log(newFruit1)
console.log(fruits)          // Original array will remain unchanged