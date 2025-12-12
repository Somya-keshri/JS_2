let p1 = new Promise((resolve, reject) => {
    // alert("Hey I am not resolved yet");
    setTimeout(() => {
        resolve(1);
    }, 2000);
})

p1.then((value) => {
    console.log(value);   // 1
});

p1.then(() => {
    console.log("Hurray!")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 3000);
    });
}).then((value) => {
    console.log(value);   // 5
});

p1.then(() => {
    console.log("Congratulations this promise is resolved");
});

p1.then(() => {
    console.log("One more then call back");
});
