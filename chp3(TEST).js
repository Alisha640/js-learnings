// Q#1:
// let marks = {
//   harry: 90,
//   shubham: 9,
//   lovish: 56,
//   Monika: 4,
// };
// for (let i = 0; i < Object.keys(marks).length; i++) {
//   console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
// };

// Q#2:
// let obj={
//     Umema:90,
//     Minahil:85,
//     Reetaj:50,
//     Meerab: 5,
// };
// for (let key in obj) {
//    console.log("marks of", key , "are" , obj[key]);
// };

// Q#3:
// let correctNum= 5;
// let i;
// while (i!=correctNum) {
//     i= prompt("Enter a number:");
//     console.log("Try Again...")
// };
// console.log("Thanks for entering a right number");

// Q#4:
const mean = (a, b, c, d, e) => {
  let addNums = a + b + c + d + e;
  let avg = addNums / 5;

  return avg;
};

let output = mean(3, 4, 7, 9, 6);
console.log(output);
