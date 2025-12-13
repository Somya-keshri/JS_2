let key = prompt("Enter key u want to set")
let value = prompt("Enter value u want to set")

localStorage.setItem(key, value)

// console.log(`The value at ${key} is ${value}`)
console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

if(key == "red" || key == "blue"){
    localStorage.removeItem(key)
}
if(key == 0){
    localStorage.clear()
}

console.log(localStorage.key(0))