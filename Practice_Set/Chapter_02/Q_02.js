// Demonstrate the use of switch case statements in JavaScript

let marks = 85;
switch(true){
    case (marks >= 90 && marks <= 100):
        console.log("A+ Grade");
        break;
    case (marks >= 80 && marks < 90):
        console.log("A Grade");
        break;
    case (marks >= 70 && marks < 80):
        console.log("B Grade");
        break;
    case (marks >= 60 && marks < 70):
        console.log("C Grade");
        break;
    case (marks >= 50 && marks < 60):
        console.log("D Grade");
        break;
    case (marks >=40 && marks < 50):
        console.log("E Grade");
        break;
    case (marks >= 0 && marks < 40):
        console.log("Fail");
        break;
    default:
        console.log("Invalid marks");
}