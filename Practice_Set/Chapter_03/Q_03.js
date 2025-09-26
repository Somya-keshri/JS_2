// Write a program to print "try again" until the user enters the correct number
// Run this program in the browser console

let cn = 43;
let i;
while(i != cn){
    console.log("Try again");
    i = prompt("Enter a number");
    i = Number.parseInt(i);
}
console.log("You have entered a correct number");
