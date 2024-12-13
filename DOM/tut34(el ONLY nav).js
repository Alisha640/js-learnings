//element ONLY navigation 
// in pervious tut we encountered a prob that when we accessed the child nodes it gave txt nodes/comment nodes instead of el nodes. let's see how to specifically target those el nodes 
// let's use the same html file 

let a = document.body;
console.log("First child of body is", a.firstChild); //returns anything that it gets can be txt,cmt,el
console.log("First ELEMENT child of body is", a.firstElementChild); //returns el ONLY
console.log("Next ELEMENT sibling of div is", a.firstElementChild.nextElementSibling);
console.log("Num of children of div are", a.firstElementChild.childElementCount);
console.log("All children(child nodes) of div are", a.firstElementChild.children);


// similarly we HashChangeEvent;
// lastElementChild
// previousElementSibling
