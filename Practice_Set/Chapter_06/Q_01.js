// Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive!


let age = prompt("Enter your age: ");
age = Number.parseInt(age)

const canDrive = (age) => {
    return age >= 18 ? "You can drive!" : "You cannot drive!";
}
alert(canDrive(age) ); 

// if(age >= 18){
//     alert("You can drive!");
// }
// else{
//     alert("You cannot drive!");
// }