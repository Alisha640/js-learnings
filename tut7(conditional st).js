// let a = prompt("Hey whats your age?"); //prompt accepts a val as str nd store it in variable 
// a = Number.parseInt(a); // Converting the string to a number
// console.log(typeof a); //check the type now 

// if-condition 
// if(a>=18){
//     console.log("You r eligible for driving")
// }

// if else condition 
// if(a>=18){
//     console.log("You r eligible for driving")
// }else{
//     console.log("Sorry, You r not eligible for driving")
// }

// Nested condition => if, else-if, else condition 
// if (a < 0) {
//   alert("This is an invalid age"); //alert only TELLS/INFORMS
// } else if (a < 9) {
//   alert("You are a kid and you cannot even think of driving");
// } else if (a < 18 && a >= 9) {
//   alert("You are a kid and you can think of driving after 18");
// } else {
//   alert("You can now drive as you are above 18");
// }
// console.log("Done");

// // HomeWork - Explore switch statement and write a basic program 
// console.log("You can", a < 18 ? "not drive" : "drive");
// console.log(a>=18? "you r an adult" : "you r young")

//Switch statements
const topper="Alisha"
switch (topper) {
    case "Aroma":
        console.log("hey we found the topper its aroma")
        break;
    case "Maha":
        console.log("hey we found the topper its maha")
        break;
    case "Alisha":
        console.log("hey we found the topper its Alisha")
        break;
    case "Umema":
        console.log("hey we found the topper its umema")
        break;

    default:
        console.log("Sorry, No topper found")
        break;
}
