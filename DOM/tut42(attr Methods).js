let x=document.getElementById("firstEl");
console.log(x);

console.log(x.getAttribute("class")); //gives val of class
console.log(x.setAttribute("yourClass", "yourDiv")); //see in html on browser
console.log(x.hasAttribute("id")); //true
console.log(x.removeAttribute("class")); //removes class attr
console.log(x.attributes); //list all the attr

// SETTING CUSTOM ATTRIBUTES(data attributes)
// In ur html file set your custom attr by adding data- at the start of your attr name nd then u can console by writing dataset 
// let's try...
console.log(x.dataset); //list both
console.log(x.dataset.mycustom1);
console.log(x.dataset.mycustom2);