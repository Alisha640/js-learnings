let num = [3, 5, 1, 2, 4];

// CLASSICAL FOR LOOP(old method)
// for(let i=0; i<num.length;i++){
//   console.log(num[i])
// }

// ForEach Loop (ONLY FOR ARR)
num.forEach((element) => {
  console.log(element * element);
});

// Array.from (coverts any obj in an arr) ex: coverting html collection(obj) into arr
let myName = "Harry";
let arr = Array.from(myName);
console.log(arr);

// for...of (prints all el - instead of using for classical method use it)
for (let item of num) {
  console.log(item);
}

// for...in (in objs it used to give keys, same is the case w arr where keys r basically indices)
for (let i in num) {
  console.log(i);
//   console.log(num[i]);
}
