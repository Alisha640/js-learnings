// we r going to see how to change the class through js nd how to remove/add/toggle a specific class 
let myDiv=document.getElementById("first");
myDiv.className="red darkText"; //class changed
myDiv.classList.add("myNewClass"); //new class added to div. see in elements
myDiv.classList.remove("red"); //removed red
myDiv.classList.toggle("red"); //adds something if it does not exist nd remove it if it already exists 