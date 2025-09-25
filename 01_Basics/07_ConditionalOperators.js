// prompt function is used to take input from the user
// it always takes input as string
// to convert string to number we use Number.parseInt() or Number.parseFloat()

// alert is used to show output to the user

let b = "19"
console.log(typeof b)
b = Number.parseInt(b)  // convert string to number
console.log(typeof b)

//let age = 19;
let age = prompt("Hey What's your age?");

// Conditional (Ternary) Operator
let canDrive = (age >= 18) ? "You can drive" : "You cannot drive";
console.log(canDrive);

// If-Else Statement
if(age < 0){
    alert("This is invalid age");
}
else if(age < 18 && age >=0){
    alert("You cannot drive");
}
else{
    alert("You can drive");
}
console.log("You are good to go!");

// Switch Statement
let day = prompt("Enter a day (1-7):");
day = Number.parseInt(day);
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// This promt and alert function will work only in browser environment
// It will not work in node.js environment
// To run this code, open the index.html file in browser and open console to see the output
// You can also use VS Code Live Server extension to run the code in browser directly from VS Code