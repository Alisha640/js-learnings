// we will see the usage of event listener methods that also handle the events (more than one work can be done through same event)

let a= document.getElementById("btn");
// a.addEventListener('click', function(e){
//     console.log("button is clicked by the user (first listener)");
//     // alert("button is clicked by the user (first listener)");
// });
// a.addEventListener('click', function(e){
//     console.log("button is clicked by the user AGAIN (second listener)");
//     // alert("button is clicked by the user AGAIN (second listener)");
// });

// now suppose i want to remove first listener if user enters fav num 2 
// let input= prompt("Enter your fav number:");
// if (input=="2") {
//     a.removeEventListener("click", function (e) {
//       console.log("button is clicked by the user (first listener)");
//     });
// }; //this won't work it will still run both event listeners, the reason is that that func in event listener nd remove event listener MUST BE THE SAME REFERENCE OBJ FUNCTION 
// it should be like ;
let handler1= function(e){
    console.log("button is clicked by the user (first listener)");
    console.log(e); //this is event obj w many properties 
    console.log(e.type); //print evet type
    console.log(e.target); //prints the el that is handling event
    console.log(e.clientX, e.clientY); //prints the x nd y coordinates of cursor
}; 

let handler2=function(e){
  console.log("button is clicked by the user AGAIN (second listener)");
  console.log(e);
  console.log(e.type); //print evet type
  console.log(e.target); //prints the el that is handling event
  console.log(e.clientX, e.clientY); //prints the x nd y coordinates of cursor
};

a.addEventListener('click', handler1);
a.addEventListener('click', handler2);

let input= prompt("Enter your fav number:");
if (input=="2") {
    a.removeEventListener("click", handler1);
}; //handler 2 will work only as i removed handler 1

// more abt EVENT Object; basically whenever the event happens browser generates an event obj nd send it to handler/func. u can name event obj as e, event or anything acc to r will