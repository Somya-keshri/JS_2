alert("Enter the value of a!")
let a = prompt("Enter a here: ", "91")
a = Number.parseInt(a)      // It is a built-in JavaScript function that converts a string into an integer
alert("You entered a of type " + (typeof a))

let write = confirm("Do you want to write it to the page")
if(write){
    document.write(a)
}
else{
    document.write("Ok. You chose not to write it to the page")
}

// alert() => Displays a simple popup message to the user, returns undefined
// prompt() => Displays a popup asking the user to enter some text, returns the text entered by the user
// confirm() => Displays a popup with OK and Cancel buttons, returns true if OK is pressed and false if Cancel is pressed

// All these functions are blocking functions i.e. they stop the execution of further code until the user has responded to the popup

// NOTE: These functions are not used in modern web development as they are intrusive and provide a poor user experience.
// They are mainly used for debugging purposes or in very simple applications.