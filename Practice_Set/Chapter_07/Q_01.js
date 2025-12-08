// Q_01: Create a navbar and change the color of its first element to goldenrod

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "goldenrod";

// Q_02: Create a table without tbody. Now use "view page source" button to check whether it has a tbody or not.

// NO body is created when you create a table without tbody in HTML. The browser automatically adds a tbody element to the table in the DOM.


// Q_03: Create an element with 3 children. Now change the color of first and last element to green.

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "darkgreen";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "darkgreen";


// Q_04: Write a JS code to change background color of all <li> tags to cyan.

Array.from(document.getElementsByTagName("li")).forEach((element) =>{
    element.style.background = "cyan";
})


// Q_05: Which of the following is used to look for the farthest ancestor that matches a given CSS selector?
// a) matches() b) closest() c) contains() d) none of the above
// Answer: d) none of the above