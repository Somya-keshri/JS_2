async function henry() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 degrees");
        }, 3000)
    });

    let bangaloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 degrees");
        }, 5000)
    });
    // delhiWeather.then(alert);
    // bangaloreWeather.then(alert);

    console.log("Fetching Delhi Weather Please wait...");
    let delhiW = await delhiWeather;
    console.log("Delhi Weather is fetched: " + delhiW);

    console.log("Fetching Bangalore Weather Please wait...");
    let bangaloreW = await bangaloreWeather;
    console.log("Bangalore Weather is fetched: " + bangaloreW);

    return [delhiW, bangaloreW];
}

// console.log("Welcome to weather control room");
// let a = henry();
// a.then((value) => {
//     console.log(value);
// })
// const cherry = () => {
//     console.log("Hey I am cherry & I am not waiting");
// }
// let b = cherry();


const daisy = async () => {
    console.log("Hey I am daisy and I am waiting ")
}
const main1 = async () => {
    console.log("Welcome to weather control room")
    let a = await henry()
    let b = await daisy()
}
main1()

// async function harry() {
//     return 5;
// }
// harry().then((x) => {
//     alert(x);
// });
