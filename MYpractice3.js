// Write a program that uses a while loop to print all even numbers from 1 to a user-provided number N 
// let N=prompt("Enter a number");
// N=Number.parseInt(N);
// let i=1;
// while (i<=N) {
//     // console.log(i);
//     if (i%2===0) {
//         console.log(i);
//     }
//     i++;
// };

// Write a program that uses a while loop to keep asking the user for a number until they guess a pre-defined secret number. When they guess correctly, print "You guessed it!".
// let secretNum= 11;
// let i=null;
// while (i!==secretNum) {
//     i =Number(prompt("enter a number"));
// };
// console.log("You guessed it!");

// Write a program that uses a do-while loop to print numbers from 1 to a user-provided number
// N, ensuring the loop runs at least once even if N is less than 1.
// let N=prompt("Enter A NUMBER:");
// let i=1;
// do {
//    console.log(i);
//    i++;
// } while (i<=N);

// Write a program that asks the user to enter a password using a do-while loop. The loop should continue asking for the password until the user enters the correct one.
// let password= 1100764;
// let i = null;
// do {
//    i = Number(prompt("Enter your password"));
// } while (i!==password);
// console.log("Correct!")

// Write a function named square that takes a number as an argument and returns its square. Use this function to print the square of a number provided by the user.
// const square=(a)=>{
//     return a**2;
// };
// let userNum=Number(prompt("Enter a number:"));
// let output=square(userNum);
// console.log(output);

// SOME MORE PRACTICE QUESTIONS:
/*Print numbers from 1 to 10 using a for loop.
Calculate the sum of all numbers from 1 to 100 using a for loop.
Calculate the factorial of a number (e.g., 5!) using a while loop.
Reverse a string without using built-in methods using a for loop.
Generate a multiplication table for a given number (e.g., 5 times 1 to 10) using a for loop.
Check if a number is prime using a for loop.
Print the first n Fibonacci numbers, where n is provided by the user, using a while loop.
Generate and print a countdown from a number to 1 using a for loop.
Create a number guessing game where the user has multiple attempts (e.g., 3 tries) using a while loop.
Print a pyramid pattern of stars with a given number of rows using a for loop.*/

// 1.
// for (let i = 0; i < 10; i++) {
//     console.log(i+1);
// };

// 2.
// let sum=0;
// for (let i = 1; i <= 100; i++) {
//     sum+=i //sum= sum+i
// };
// console.log(sum);

// 3.
// let num=5;
// let factorial;
// let i=0;
// while (i<num) {
//     factorial=num!;
//     i++;
// };

// 4.
// let str= "Aleena";
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// };
