let key = prompt("Enter key u want to set")
let value = prompt("Enter value u want to set")

sessionStorage.setItem(key, value)

console.log(`The value at ${key} is ${sessionStorage.getItem(key)}`)

if(key == "red" || key == "blue"){
    sessionStorage.removeItem(key)
}
if(key == 0){
    sessionStorage.clear()
}

window.onstorage = (e) => {
    alert("changed")
    console.log(e)
}