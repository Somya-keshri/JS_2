console.log(document.cookie)
document.cookie = "name=HarryPotter"
document.cookie = "name2=Hermione"
document.cookie = "name=Harry"

let key = prompt("Enter your key")
let value = prompt("Enter your value")
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`  // converts special characters into a safe format
console.log(document.cookie)