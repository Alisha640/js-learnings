// Q#1
// let myArray=[23,67,45,90,87,12];
// let userInput=Number.parseInt(prompt("enter any number:"));
// myArray.push(userInput);
// console.log(myArray);

//Q#2
let myArray = [23, 67, 45, 90, 87, 12];
let userInput;
do {
  userInput = Number.parseInt(prompt("enter any number:"));
  myArray.push(userInput);
} while (userInput!==0);
console.log(myArray);

//Q#3
let arr=[30,40,67,23,98,100];
let output= arr.filter((element)=>{
    let res= element%10 ===0;
    return res;
});
console.log(output);

// Q#4
let arr2=[2,4,5,9,3];
let result= arr2.map((el)=>{
    return el**2;
});
console.log(result);

// Q#5
let arr3=[1,2,3,4,5,6,7,8];
let calculation= arr3.reduce((a,b)=>{
    return a*b;
});
console.log(calculation);

