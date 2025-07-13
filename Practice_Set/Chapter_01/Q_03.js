// Create a const object in JS. Can u change it to hold a num later?
// No, you cannot change the type of a const object, but you can modify its properties.

const obj = {
    name: "John",
    age: 27
}
console.log(obj);
obj.name = 25;
console.log(obj.name);

// obj = 21  // Error