67
"Heyy"
true
54.7  // not show error

console.log("Operators in JavaScript")

// Arithmetic Operators
let a = 25;
let b = 4;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);     // 6.25
console.log("a % b =", a % b);
console.log("a ** b =", a ** b); // Exponentiation

let c = 13;
let d = 51;

console.log("++a = ",++a);     // 26
console.log("a = ",a);          // 26
console.log("b++ = ",b++);     // 4
console.log("b = ",b );         // 5

console.log("--c = ",--c);     // 12
console.log("c = ",c);          // 12
console.log("d-- = ",d--);      // 51
console.log("d = ",d);         // 50
console.log(--b);   

// Assignment Operators
// =, +=, -=, *=, /=, %=, **=
let e = 5;
console.log("e =", e);
e += 3;
console.log("e += 3 ->", e);
e -= 2;
console.log("e -= 2 ->", e);

// Comparison Operators
let c1 = 5;
let c2 = 10;
let c3 = "5";
console.log("c1 == c2 ->", c1 == c2);
console.log("c1 != c2 ->", c1 != c2);
console.log("c1 == c3 ->", c1 == c3);   // true because only value is compared
console.log("c1 === c3 ->", c1 === c3);   // false because value and type both are compared
console.log("c1 !== c3 ->", c1 !== c3);
console.log("c1 > c2 ->", c1 > c2);

// Logical Operators
// &&, ||, !
let x = 7;
let y = 12;
console.log(x > 5 && x < 10);
console.log(x < y || y == 11);
console.log(!(x == y));     // true (gives opposite value)
console.log(!(x < y));     // false is negated to true

// Conditional (Ternary) Operator
let age = 20;
let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(eligibility);

// Comments
// This is a single-line comment
/* This is a multi-line comment
It can span multiple lines */

// String Operators
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2);
console.log(str1 + " Everyone");
console.log("Hello ".repeat(3));
console.log("Hyy ".length)
console.log("Hyy ".toUpperCase())