let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 11000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Promise 2 resolved");
        reject("Promise 2 rejected");
    }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved");
    }, 3000);
});

// Handling promises individually
// p1.then((value) => {
//     console.log(value)
// })
// p2.then((value) => {
//     console.log(value)
// })
// p3.then((value) => {
//     console.log(value)
// })


// Handling multiple promises together

// Using Promise.all to wait for all promises to resolve
// let promise_all = Promise.all([p1, p2, p3])

// use .allSettled to get results of all promises regardless of resolve/reject
// let promise_all = Promise.allSettled([p1, p2, p3])

// use Promise.race to get the first settled promise (resolve or reject)
// let promise_all = Promise.race([p1, p2, p3])

// use Promise.any to get the first resolved promise
// let promise_all = Promise.any([p1, p2, p3])

// use Promise.resolve to create a resolved promise
// let promise_all = Promise.resolve(6)

// use Promise.reject to create a rejected promise
let promise_all = Promise.reject(new Error("Some error occurred"))
promise_all.then((value) => {
    console.log(value);
})