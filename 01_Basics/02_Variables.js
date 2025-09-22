var a = 67 // a contains 67
// var before ES6
 
console.log(a)
a = "Buzz"         // (var can be updated & re-declared)
console.log(a)

let q = 90
console.log(q)
q = "Hello"      // (let can be updated but not re-declared)
// let q = "Hello"  // This will throw an error
console.log(q)

var p = 45;
console.log(p)   // 45 
{
    var p = 'this';
    console.log(p)    // this // var is function scoped
    let q = 100;
    console.log(q)    // 100 // let is block scoped
}
console.log(p)  // this // var is function scoped
console.log(q)  // 100 // let is block scoped

var b = 5        // => declaring a variable
// 5:literal , b:indentifier
// (JS : Case sensitive)

// let 8harry = 7 // Not allowed this will throw an error (begin with $, _ or a letter)
// let var = 7   // syntax error (var is a reserved keyword)
let harry = 53 // let can be updated but not re-declared