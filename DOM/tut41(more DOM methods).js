// let x=document.getElementsByTagName("span")[0];
// console.log(x); //prints span as el
// let u=document.getElementsByTagName("span")[0];
// console.dir(u); //prints span as obj

//TAG NAME ND NODE NAME =>tagname is for el only nd nodename for any node
// console.log(document.body.firstChild.nodeName); //ofc txt as there is one
// console.log(document.body.firstElementChild.nodeName); //span

// INNER HTML ND OUTER HTML => inner gives an el's inner content nd outer gives the el as well as the inner content nd both of thses dom methods r only for el nodes
let v=document.getElementById("first");
// getting inner html of span 
console.log(v.innerHTML);
// getting outer html of span 
console.log(v.outerHTML);  
// setting inner html of span 
// console.log(v.innerHTML="<i>it's me<i/>"); 
// setting outer html of span 
// console.log(v.outerHTML="<div><b>my name is alisha</b></div>"); 

// for other nodes that aint an el we can use data or nodeValue instead of inner outer html
let t=document.body.firstChild;
console.log(t.data);
console.log(t.nodeValue);

// TEXT CONTENT => gives something as a text nd remove tags 
console.log(document.body.textContent);

//HIDDEN PROPERTY => hides an el also u can add this in the html
// console.log(v.hidden="true");//hides the el
console.log(v.hidden); //does not hide as it's val is false by default 
