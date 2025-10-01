let num = [3, 5, 1, 4, 2]

for(let i=0; i<num.length; i++){
    console.log(num[i])
}

// ForEach loop
num.forEach((element) => {
    console.log(element * element)
})

// Array.from method
let str = "Hello"
let arr = Array.from(str)   // It will convert string to array
console.log(arr)

// for...of loop
for (let item of num){
    console.log(item)
}

// for...in loop
for (let i in num){
    console.log(i, num[i])   // It will print index and value
}
