// In Q1 use confirm to ask the user if he wants to see the prompt again

const canDrive = (age) => {
    return age >= 18 ? true : false;
}
let runAgain = true;

while(runAgain){
    let age = prompt("Enter your age: ");
    age = Number.parseInt(age)

    if(canDrive(age)){
        alert("You can drive!");
    }
    else{
        alert("You cannot drive!")
    }
    runAgain = confirm("Do you want to play again?")
}

