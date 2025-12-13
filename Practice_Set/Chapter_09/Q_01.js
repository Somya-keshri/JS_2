// Q1: Write a program to load a JS file in a browser using Promises. Uses .then() to display an alert when the load is complete.

const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(src + " loaded successfully");
        };
        document.head.append(script);
    });
};

let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js")
a.then((value) => {
    console.log(value);
})

// Q2: Write the same program from previous ques and use async/await syntax.

const main2 = async () => {
    console.log(new Date().getMilliseconds())
    let b = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js")
    console.log(b);
    console.log(new Date().getMilliseconds())
}
main2()

// Q3: Create a promise which rejects after 3 seconds. Use async/await to get its value and use a try/catch to handle the error.

let p = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Please this is not acceptable.."))
        });
    })
}

let q = async() => {
    try{
    let c = await p()
    console.log(c)
    } catch(err){
        console.log(err + " This error is caught using try/catch");
    }
}
q()

