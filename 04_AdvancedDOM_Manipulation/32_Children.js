console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)

let arr = Array.from(document.body.childNodes)
// 'childNodes' gives a NodeList of *all* child nodes inside <body>
// That includes text nodes, comments, and elements
// 'Array.from()' converts that NodeList into a real Array,
// so you can use array methods like map(), filter(), or forEach()

console.log(arr);
// Displays the array of all child nodes of the <body> in the console