let first = document.getElementById("first");
let a = first.getAttribute('class');
console.log(a);
console.log(first.hasAttribute('class'));   // true
console.log(first.hasAttribute('style'));    // false
console.log(first.hasAttribute('id'));      // true

console.log(first.setAttribute("hidden", "true"));
console.log(first.setAttribute("class", "true harry"));
first.removeAttribute("class");

console.log(first.attributes);
// to get all attributes as a NamedNodeMap

console.log(first.dataset)   // to get all data-attributes as a DOMStringMap
console.log(first.dataset.game)
console.log(first.dataset.player)