// this is another way to handle the event 
let a = document.getElementsByClassName("container")[0];
a.onclick = () => {
let b = document.getElementsByClassName("container")[0];
b.innerHTML="<h1>Hello World</>";
};
