let x=document.getElementsByTagName("div")[0];
// classical method to insert el
// x.innerHTML = x.innerHTML + "<h1>Hello World!</h1>";

// INSERTION METHODS 
// 1.Append() doing the same above thing w method nd creating el now
let y=document.createElement("div");
y.innerHTML = "<h1>Hello World!</h1>";
// x.appendChild(y);
// x.append(y); //adds el at the end of container but inside it
// x.prepend(y);  //adds el at the start of container but inside it
// x.before(y); //adds el at the start of container but outside it (if not visible check in elements)
// x.after(y);  //adds el at the end of container but outside it (if not visible check in elements)
x.replaceWith(y); //replaced initially made div with my created div