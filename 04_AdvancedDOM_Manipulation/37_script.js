//console.log(id1)   // not a good approach, id1 is not defined yet
let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
console.log(id1)
console.log(id1.innerText)

console.log(document.getElementsByClassName("box"))

// matches() checks whether the selected element matches the given CSS selector.
console.log(id1.matches(".class"))  // false : id1 has class "box" not "class"
console.log(id1.matches(".box"))   // true : id1 does have class "box"

// closest(selector) starts from the element itself and moves upwards in the DOM, checking if the element or any parent matches the selector.
// To find the nearest matching ancestor (including itself).
console.log(sp1.closest(".box"))
console.log(sp1.closest("#sp1"))

console.log(id1.classList)

//contains() : To check if one element is inside another (any level).
console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))
console.log(sp1.contains(id1))

// querySelector() searches downward in the DOM (inside the element).
console.log(id1.querySelector("#sp1"))