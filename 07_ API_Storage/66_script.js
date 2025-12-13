let p = fetch("https://goweather.xyz/v2/weather/Berlin")
p.then((value1) => {
    console.log(value1.status)
    console.log(value1.ok)
    console.log(value1.headers)
    return value1.json()
}).then((value2) => {
    console.log(value2)
})

// let p = fetch("https://jsonplaceholder.typicode.com/posts/1");
// p.then((response) => {
//     console.log(response.status); // 200
//     console.log(response.ok);     // true
//     return response.json();
// }).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log("Error:", error);
// });

