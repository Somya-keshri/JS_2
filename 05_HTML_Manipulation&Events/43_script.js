let a = document.getElementsByTagName('div')[0];
a.innerHTML = a.innerHTML + "<h1> This is created using JS </h1>";

let div = document.createElement('div')
div.innerHTML = "<h3> This is created using createElement and innerHTML </h3>"
a.appendChild(div)

//a.append(div)   // Inserts an element inside another element at the end.
//a.prepend(div)   // Inserts an element inside another element at the beginning.
//a.before(div)   // Inserts an element before a specified element as a sibling.
//a.after(div)    // Inserts an element after a specified element as a sibling.
//a.replaceWith(div)    // Replaces a specified element completely with another element.