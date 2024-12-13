// there r many way to insert NODES in DOM 
// ADJACENT HTML/ELEMENT/TEXT INSERTION
let myDiv=document.getElementById("first");
// specify the position nd the el u want to add 
myDiv.insertAdjacentHTML("beforebegin", "<h1 class= 'beforebegin'>Hello</h1>");
myDiv.insertAdjacentHTML("afterbegin", "<h1 class= 'afterbegin'>Hello</h1>");
myDiv.insertAdjacentHTML("beforeend", "<h1 class= 'beforeend'>Hello</h1>");
myDiv.insertAdjacentHTML("afterend", "<h1 class= 'afterend'>Hello</h1>");
myDiv.remove(); //for removing any node
// similarly we can add text nodes too 