console.log(document.body.firstChild)
a = document.body.firstChild
console.log(a.parentNode)
console.log(a.parentElement)
console.log(a.firstChild.nextSibling)

/*<div id="family">
  <h2 id="parent">Parent</h2>
  <ul id="children">
    <li id="child1">Child 1</li>
    <li id="child2">Child 2</li>
    <li id="child3">Child 3</li>
  </ul>
</div>*/

// Parent Elements
let child = document.getElementById("child1");
console.log(child.parentElement);    // <ul id="children">...</ul>
console.log(child.parentElement.parentElement);    // <div id="family">...</div>

// Children Elements
let ul = document.getElementById("children");
console.log(ul.children);     // HTMLCollection of <li> items

console.log(ul.firstElementChild.textContent);     // "Child 1"
console.log(ul.lastElementChild.textContent);      // "Child 3"

// Sibling Elements
let child2 = document.getElementById("child2");
console.log(child2.previousElementSibling.textContent);     // "Child 1"
console.log(child2.nextElementSibling.textContent);         // "Child 3"
