// Use reduce to calculate factorial of a given number from an array of first n natural num

let arr = [1, 2, 3, 4, 5];
let n = arr.reduce((x1, x2)=>{    // Combine all elements into one
    return x1 * x2;
})
console.log(n);