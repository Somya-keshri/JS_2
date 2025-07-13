var a = 45;
var b = "Somya";
var c = null;
let d = undefined;
let e = true;

{
    var g = 'this';
    console.log(g); // 'this'
}
console.log(g); // 'this' (var is function scoped or globally scoped)

{
    let h = 'that';
    console.log(h); // 'that'
}
// console.log(h);   // ReferenceError: h is not defined (let is block scoped)

const i = 100;
// i = 200; // TypeError: Assignment to constant variable (const cannot be reassigned)
// let i = 300; // SyntaxError because i is already declared as const

// const marks; // SyntaxError: (const must be initialized during declaration)

const student = {
    name: "John",
    age: 20
};
student.name = "Doe"; // Allowed, properties of const objects can be modified
// student = {}; // TypeError: Assignment to constant variable (const cannot be reassigned)
console.log(student); // { name: 'Doe', age: 20 }

// Try to avoid using var in modern JavaScript, prefer let and const
// Use let for variables that will change and const for constants or objects that should not be reassigned
