try {
    //console.log(harry);
    throw new ReferenceError("This is a custom error");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

try {
    let age = prompt("Enter your age: ");
    age = Number.parseInt(age);
    if (age > 120) {
        throw new RangeError("Age cannot be greater than 100");
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}