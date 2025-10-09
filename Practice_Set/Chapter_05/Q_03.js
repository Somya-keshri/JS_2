// filter for numbers divisible by 10 from a given array

let arr = [4, 20, 15, 90, 80, 35];
let n = arr.filter((x)=>{     // Select specific elements
    return x%10 == 0;
})
console.log(n);