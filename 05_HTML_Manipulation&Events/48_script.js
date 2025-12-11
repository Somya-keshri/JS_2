let x = function(e){
    console.log(e.target);
    console.log(e.type, e.clientX, e.clientY);
    alert("First Alert");
}
btn.addEventListener('click', x);

let y = function(e){
    console.log(e);
    alert("Second Alert");
}
btn.addEventListener('click', y);

let a = prompt("What is yout fav num?");
// it won't work for anonymous functions
// if(a==2){
//     btn.removeEventListener('click', function(e){
//         alert("First Alert");
//     })
// }

// works for named functions (should pass the same reference eg x)
if(a=="2"){
    btn.removeEventListener('click', x);
}
