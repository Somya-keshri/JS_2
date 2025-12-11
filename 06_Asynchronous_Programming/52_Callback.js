console.log("Heyy");
// Synchronous
// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your fav colour?");
// console.log(a + " is " + b + " years old and likes " + c);

// Asynchronous
// console.log("Starting async code");
// setTimeout(function() {
//     console.log("This is setTimeout after 3 sec");
// }, 3000);
// console.log("Ending async code");

// Callbacks
function loadScript(src, callback) {
    var script = document.createElement('script');
    script.src = src;
    script.onload = function(){
        console.log("Script loaded with src: " + src);
        callback(null, src);
    }
    script.onerror = function(){
        console.log("Error loading script with src: " + src);
        callback(new Error("Src got some error"));
    }
    document.body.appendChild(script);
}

function hello(error, src){
    if(error){
        console.log(error);
        return;
    }
    alert("Hello World " + src);
}
function gudmrng(error, src){
    if(error){
        console.log(error);
        return;
    }
    alert("Good Morning " + src);
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js", hello);