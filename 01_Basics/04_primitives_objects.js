// NN BB SS U   => Primitives in JS

let a = null;        // null
let b = 345;          // number 
let c = true;        // boolean 
let d = BigInt(567) + BigInt("3");   // BigInt 
let e = "Hello";                  // string 
let f = Symbol("unique");          // Symbol 
let g = undefined;                // undefined 

console.log(a, b, c, d, e, f, g);
console.log(typeof a);     // object (null is a special case in JavaScript)
console.log(typeof c);     // boolean

// Objects => Non-Primitives in JS

const item = {
    "John": true,
    "Shubh": false,
    "Lovish": 67,
    "Rohan": undefined
}
console.log(item["John"])     // true
console.log(item["uytft"])     // undefined