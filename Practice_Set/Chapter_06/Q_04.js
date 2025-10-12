// Write a prog to change the url to google.com (Redirection) if user enters a number greater than 4

let num = prompt("Enter number: ");
num = Number.parseInt(num)

if(num > 4){
    location.href = "https://www.google.com";
}