//Q#1: Write a program that uses a for loop to print numbers from 1 to 10.
// for (let i = 1; i<=10; i++) {
//     console.log(i);
// };

//Q#2: Write a program that takes a number N and uses a for loop to find the sum of all numbers from 1 to N.
/*let N=prompt("Enter a number N:");
N=Number.parseInt(N);
let sum=0;
for (let i = 1; i <= N; i++) {
    sum+=i; //15 if N=5
};
console.log("sum of all numbers from 1 to" + N + "is" + sum);*/

//Q#3: Write a program that takes a number as input and uses a for loop to print its multiplication table up to 10.
// let input = prompt("Enter a number:");
// input = Number.parseInt(input);
// let table=0;
// for (let i = 0; i < input; i++) {
//     table*=i;
// }

//Q#4: Create an object with some details about yourself (e.g., name, age, and city). Use a for-in loop to print both the keys and values of the object.
/*let myData={
    myName:"Alisha",
    age:19,
    city:"Bahawalpur",
};
for (let key in myData) {
    console.log(key + " is " + myData[key]);
};*/

// Q#5:Create an object that stores details about a book (e.g., title, author, pages). Use a for-in loop to count and print how many properties (keys) the object has.
/*let book={
    title: "The Kite Runner",
    author: "Khalid",
    pages: 200,
};
let keyCount=0;
for (let key in book) {
    keyCount++;
}
console.log(keyCount);*/

//Q#6: Write a program that takes a string (your name, for example) and uses a for-of loop to print each character in the string on a new line.
/*let enterName = prompt('Enter your name:');
for (let element of enterName) {
    console.log(element);
};*/

// Q#7: Write a program that takes a string as input and uses a for-of loop to count how many vowels (a, e, i, o, u) are in the string.
// let userEnter=prompt("Enter your name:");
// let count=0;
// for (let element of userEnter) {
//     if (element === "a"||element ==="e"||element ==="i"||element ==="o"||element ==="u") {
//         count++;
//     };
// };
// console.log(count);

// Write a program that takes a number N as input and uses a while loop to print all numbers from 1 to N.
// let N = prompt("Enter a number N:");
// let i=1;
// while (i<=N) {
//     console.log(i);
//     i++;
// }

// Question 1: Print Numbers from 1 to N
// Task: Write a program that uses a while loop to print numbers from 1 up to a user-provided number N.
// let input= prompt("enter the val of N");
// input=Number.parseInt(input);
// let i=0;
// while (i<N) {
//     console.log(i+1);
//     i++
// };

// Question 2: Print Numbers from 0 to N
// Task: Write a program that uses a while loop to print numbers from 0 up to a user-provided number N.
let input = prompt("enter the val of N");
input = Number.parseInt(input);
let i=0;
while (i<=input) {
    console.log(i);
    i++;
};