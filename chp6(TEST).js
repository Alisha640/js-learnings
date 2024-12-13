// Q#1
// let userINput=Number.parseInt(prompt("Enter your age:"));
// const canDrive=(userINput)=>{
//     return userINput>=18?true:false;;
// };
// if (canDrive(userINput)) {
//     alert("You can drive");
// } else {
//     alert("You can not drive");
// }

// Q#2
// let runAgain=true;
// const canDrive=(userINput)=>{
//     return userINput>=18?true:false;;
// };

// while (runAgain) {
//     let userINput=Number.parseInt(prompt("Enter your age:"));
//     if (canDrive(userINput)) {
//         alert("You can drive");
//     } else {
//         alert("You can not drive");
//     }
//     runAgain=confirm("Do you want to see this prompt again?");
// };

// Q#3
// let userINput = Number.parseInt(prompt("Enter your age:"));
// const canDrive=(userINput)=>{
//     return userINput>=18?true:false;;
// };

// if (userINput<0) {
//     console.error("Please enter a valid age");
// };

// if (canDrive(userINput)) {
//     alert("You can drive");
// } else {
//     alert("You can not drive");
// };

// Q#4
// let userINput = Number.parseInt(prompt("Enter your age:"));
// if (userINput>4) {
//     location.href="https://google.com";
// };

// Q#5
let userINput = prompt("Enter the background color you want:");
document.body.style.background=userINput;