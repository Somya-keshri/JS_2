setTimeout(() => {
    console.log("Hacking wifi... Please wait...");
}, 1000);

// console.log(Rahul);    // error will be thrown here
try {
    console.log(Rahul);
} catch (error) {
    console.log("Error caught: " + error);
}

setTimeout(() => {
    console.log("Fetching username and password... Please wait...");
}, 2000);

setTimeout(() => {
    console.log("Hacking Rahul's facebook id... Please wait...");
}, 3000);

setTimeout(() => {
    console.log("Username and password of Rahul (+919657400000) fetched... Please wait...");
}, 4000);
