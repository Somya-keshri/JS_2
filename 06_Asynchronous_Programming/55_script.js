let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        console.log("I am a promise and I am resolved");
        resolve(true);
    }, 3000);
});

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        console.log("I am a promise and I am rejected");
        reject(new Error("I am an error"));
    }, 3000);
});
console.log(p1, p2);

// To get the value
p1.then((value) => {
    console.log(value);
})

// To catch the errors
// p2.catch((error) => {
//     console.log("Some error occurred in P2: " + error);
// });

// Using then for both resolve and reject
p2.then((value) => {
    console.log(value);
}, (error) => {
    console.log(error);
})