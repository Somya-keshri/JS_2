console.assert(true);
console.clear();
console.log("Hello World")
console.table({a:1, b:2, c:3})

console.warn("This is a warning")
console.error("This is an error")
console.info("This is some info")

console.time("for Loop");
for(let i=0; i<50; i++){
    console.log(i)
}
console.timeEnd("for Loop")

console.time("while Loop")
let j = 0;
while(j<50){
    console.log(j)
    j++;
}
console.timeEnd("while Loop")

console.assert(1==2, "1 is not equal to 2")
console.assert(1==1, "1 is equal to 1")

// Run this code in the browser and check the output