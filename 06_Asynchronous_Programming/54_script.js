// A Promise is an object that represents a task that will finish in the future.
// It has three states: pending, fulfilled, rejected.
// Helps avoid callback hell and makes async code easier to manage.
// Executes immediately when created but returns results later.
// Works with .then(), .catch(), and .finally() for handling outcomes.

let promise = new Promise(function(resolve, reject){
    //alert("I am an alert inside promise");
    alert("Heyy")
    resolve(56);
})

console.log("Hello One")
setTimeout(function(){
    console.log("Hello Two in 2 seconds")
}, 2000)
console.log("Hello Three")
console.log(promise)


// Uses of Promises
// Fetching data from APIs or servers
// Waiting for some process to finish (loading files, images, etc.)
// Running tasks in sequence without nested callbacks
// Error handling in async tasks using .catch()

// Fetch google homepage => console.log("google.com homepage downloaded")
// Fetch data from an data API
// Fetch pictures from the server
// Print downloading progress
// Rest of the script