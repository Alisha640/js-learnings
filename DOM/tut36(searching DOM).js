let nav=document.getElementById("myNav");
console.log(nav.style.backgroundColor="purple");

//selected all three cards. as it returns a node list so we need to design it by mentioning index
let mycards=document.querySelectorAll(".card");
mycards[0].style.backgroundColor="yellow";
mycards[1].style.backgroundColor="green";
mycards[2].style.backgroundColor="pink";

// let's do for one only. other two also had same class but this method automatically access the first one
let yourcard=document.querySelector(".card-text");
yourcard.style.color="red";

// as it is getElements "s" so it returns html collection u need to specify the index 
let myspan=document.getElementsByTagName("span");
myspan[0].style.backgroundColor="cyan";

let mycontainer=document.getElementsByClassName("container");
mycontainer[0].style.backgroundColor="grey";

let input=document.getElementsByName("search"); //name this is in input tag
input[0].style.border="3px solid red";


