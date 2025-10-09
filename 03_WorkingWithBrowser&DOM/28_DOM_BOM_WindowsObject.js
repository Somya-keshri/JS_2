window.console.log(window)
console.log(document.body)  // document is a property of window object
document.body.style.background = "green"  // Changing the background color of the body to green

window.alert("Hello!");
window.prompt("Enter your name:");
window.confirm("Are you sure?");

alert("Hello!");   // same as window.alert("Hello!")

console.log(window.location.href);   // shows current URL
window.location.href = "https://www.google.com";

let heading = document.getElementById("title");
heading.style.color = "blue";
heading.textContent = "Welcome, Henry";