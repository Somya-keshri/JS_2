// Keep adding numbers to the array in ques 1 untill 0 is added to the array

let arr = [4, 23, 15, 74, 63];
let a;
do{
    a = prompt("Enter a num: ")
    a = Number.parseInt(a)
    arr.push(a)
}
while(a != 0);
console.log(arr)