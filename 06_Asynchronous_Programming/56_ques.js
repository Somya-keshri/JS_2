// Ques: Rewrite the loadscript function we wrote in the beginning of this chapter using promises.
const loadscript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.type = "text/javascript";
        script.src = src;
        document.body.appendChild(script)
        script.onload = () => {
            resolve("Script loaded successfully");
        }
        script.onerror = () => {
            reject(0)
        }
    })
}
let p1 = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js");

p1.then((value) => {
    console.log(value);
    return loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js");
}).then((value) => {
    console.log("Second script loaded");
}).catch((error) => {
    console.log("Sorry we are having problems loading the script");
})