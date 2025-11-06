// Change the card title to red
// let ctitle1 = document.getElementsByClassName("card-title")[0]
// ctitle1.style.color = "green"
let ctitle = document.getElementById("firstcardtitle")
ctitle.style.color = "blue"

let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "blue"
ctitles[1].style.color = "red"
ctitles[2].style.color = "green"
console.log(ctitles)

document.querySelector(".this").style.color = "black"
document.querySelector(".this").style.background = "olive"
document.querySelector(".that").style.background = "steelblue"
document.querySelector(".abc").style.background = "goldenrod"

console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))
console.log(document.getElementsByName("search"))