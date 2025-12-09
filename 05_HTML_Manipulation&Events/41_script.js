let x = document.getElementsByTagName('span')[0];
console.log(x);   // for normal output.
console.dir(x);   // for detailed output of element properties and methods.

// returns the name of the node as a string.
console.log(document.body.firstChild.nodeName)    // returns special values like #text, #document, etc
console.log(document.body.firstElementChild.nodeName)    // returns the tag name in UPPERCASE

// nodeName → works for all node types
// tagName → works only for element nodes

console.log(first.innerHTML)
console.log(first.innerHTML = "<i> Hey I am italic </i>")
console.log(first.outerHTML)
console.log(first.outerHTML = "<div> hello </div>")

console.log(document.body.firstChild)
console.log(document.body.firstChild.data)
console.log(document.body.firstChild.nodeValue)

console.log(document.body.textContent)
// console.log(first.hidden = false)