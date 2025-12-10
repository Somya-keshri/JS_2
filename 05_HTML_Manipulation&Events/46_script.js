//document.write("Hyy")
//alert("Hello")

// let a = setTimeout(function() {
//     alert("I am inside setTimeout")
// }, 2000);

// let b = prompt("Do you want to run the settimeout? (yes/no)");
// if("no" == b){
//     clearTimeout(a);
// }

console.log("I am outside setTimeout")

//setInterval → repeats
//setTimeout → runs once

const sum = (a, b) => {
    console.log("Yes I am sum function " + (a+b))
    a+b
}
setTimeout(sum, 3000, 3, 2);

let timerId = setInterval(() => {
    alert("I am inside setInterval")
    clearInterval(timerId);     // stops repeating
}, 5000);
