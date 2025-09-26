// Write a program in Q1 using for in loop

let marks = {
    Henry: 97,
    Rohan: 70,
    Aakash: 65
};
for (let key in marks){
    console.log(key + " has scored " + marks[key]);
}
// Note: In for in loop, we get the keys of the object one by one.
// We can use these keys to get the corresponding values from the object