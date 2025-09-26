// Write a program to print the marks of a student in an object using for loop

let obj = {
    Henry: 97,
    Rohan: 70,
    Aakash: 65
};
for(let i=0; i<Object.keys(obj).length; i++){
    console.log("Marks of " + Object.keys(obj)[i] + " are " + obj[Object.keys(obj)[i]]);
}