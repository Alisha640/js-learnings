// for loops nd types 
// Program to add first n natural numbers
// let sum = 0;
// let n = prompt("Enter the value of n:");
// n = Number.parseInt(n);
// for (let i = 0; i < n; i++) {
//   sum += (i + 1);
// };
// console.log("Sum of first " + n + " natural numbers is " + sum);
//RATTA: jb b i=0 ho aur i<n ho to it means result hamesha 0 sy le kr n-1 tk hoga print
// console.log(i) throws err that i is undefined(reason? "we used let in for loop")

/*
let obj = {
  harry: 90,
  shubh: 45,
  shivika: 56,
  ritika: 57,
  shiv: 23
}
// For in loop (prints key of obj) (used for: ARRAYS/OBJ)
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a])
}

// For of loop (used for: ARRAYS/STR) (iterates the val)
for (let b of "Harry") {
  console.log(b)
}
*/

let str="Alisha";
for (let element of str) {
    console.log(element);
}