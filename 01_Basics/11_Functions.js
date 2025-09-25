const hello = () => {
    console.log("Hey how are you?")
    return "I am good"
}
function avg(x, y){
    return x+y/2;
}
const sum = (p, q) => {
    return p + q;
}

let a = 5;
let b = 2;
console.log("The sum of a and b is " + sum(a, b))
console.log("The average of a and b is " + avg(a, b))
console.log(hello())