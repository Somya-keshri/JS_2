// Write a prog to show different alerts when diff buttons are clicked
document.getElementById('btn1').onclick = function(){
    alert("Button 1 clicked");
}
document.getElementById('btn2').onclick = function(){
    alert("Button 2 clicked");
}
document.getElementById('btn3').onclick = function(){
    alert("Button 3 clicked");
}

// Create a website which is capable of storing bookmarks of your fav websites using href
document.getElementById('addBookmark').addEventListener('click', function(){
    window.location = "https://chatgpt.com";
    window.focus();
});


// Repeat ques 2 using event listeners
let x = function(e){
    alert("Button " + e.target.id + " clicked using event listener");
}
btn1.addEventListener('click', x);
btn2.addEventListener('click', x);
btn3.addEventListener('click', x);  

// Write a JS prog to keep fetching contents of a websites (every 5 sec)

// const fetchContents = async (url) => {
//     con = await fetch(url);
//     data = await con.json();
//     return data;
// }

// setInterval(async function() {
//     let url = "https://api.github.com/users/octocat";
//     console.log(await fetchContents(url));
// }, 3000);

// Create a glowing bulb effect using classlist toggle method in JS