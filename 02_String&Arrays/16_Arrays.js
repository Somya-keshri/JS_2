let marks_class = [91, 82, 63, 76, false, "Not Present"]
console.log(marks_class)
console.log(marks_class[0])
console.log(marks_class[2])
console.log(marks_class[4])
console.log(marks_class[5])
console.log(marks_class[6])   // it will show undefined because there is no 7th element in the array
console.log("Length of array: " + marks_class.length)
marks_class[4] = true   // Changing the value of an array
marks_class[3] = 89
marks_class[6] = 100    // Adding a new element in the array
console.log(marks_class)
console.log("Length of array: " + marks_class.length)