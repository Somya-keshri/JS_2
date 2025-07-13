// Try to add a new key to the const obj in ques 3. Were you able to do it?
// Yes, you can add new properties to a const object, but you cannot reassign the object itself.

const obj = {
    name: "John",
    age: 27
}
obj.marks = 95; // Adding a new key
// OR
obj['friends'] = ["Alice", "Bob"]; // Adding another key using bracket notation
console.log(obj); 
// Output: { name: 'John', age: 27, marks: 95, friends: [ 'Alice', 'Bob' ] }