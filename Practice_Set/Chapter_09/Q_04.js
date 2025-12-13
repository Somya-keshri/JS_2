// Q4: Write a program using Promise.all() inside an async/await to await 3 promises. Compare its result with the case where we await the promises one by one.

let promise1 = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 2000);
    })
} 

let promise2 = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20)
        }, 1000);
    })
} 

let promise3 = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30)
        }, 3000); 
    })
} 
const run = async() => {
    console.time("run")
    // let a1 = await promise1()
    // let a2 = await promise2()
    // let a3 = await promise3()
    // console.log(a1, a2, a3);    // 6 seconds

    let s1 = promise1()
    let s2 = promise2()
    let s3 = promise3()
    let s1s2s3 = await Promise.all([s1, s2, s3])
    console.log(s1s2s3);      // 3 seconds 
    console.timeEnd("run")
}
run()