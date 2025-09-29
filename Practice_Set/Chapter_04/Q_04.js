// Extract the amount out of this string "Please give Rs 1000"

let str = "Please give Rs 1000"
let amount = str.slice("Please give Rs ".length);
console.log(amount);
console.log(typeof amount);

let amount2 = Number.parseInt(str.slice(15));
console.log(amount2)
console.log(typeof amount2);