// Question 1: Write a program that declares a variable to store your name, age, and whether you're a student (boolean). Then, print these values to the console.
/*const myData={
    name:"Alisha",
    age: 19,
    isStudent: true,
};
console.log(myData);
console.log(myData["age"]);*/

// Question 2: Write a program that takes two numbers, stores them in variables, and prints their sum, difference, product, and division.
/*let num1= 67;
let num2= 89;
console.log("sum =", num1 + num2);
console.log("diff =", num1 - num2);
console.log("product =", num1 * num2);
console.log("division =", num1 / num2);*/

// Question 3: Write a program that checks if a number stored in a variable is positive, negative, or zero. Use an if-else statement to display the appropriate message.
/*let number=34;
if (number>0) {
    console.log("it's positive");
} else if(number<0){
    console.log("it's negative");
}else{
    console.log("number is zero");
};*/

// Question 4: Write a program that takes a number and checks whether it is even or odd using an if-else statement.
/*let getVal= prompt("enter any number");
getVal=Number.parseInt(getVal);
if (getVal%2===0) {
    console.log("the number u entered is even");
} else {
    console.log("the number u entered is odd");
};*/

// Question 5: Write a program that takes a number and checks if it's divisible by 3, 5, or both using else if
/*let userInput=prompt("Enter any random number:");
userInput = Number.parseInt(userInput);
if (userInput % 3 ===0) {
    console.log("your number is divisible by 3");
} else if (userInput % 5 === 0) {
    console.log("your number is divisible by 5");
}else if(userInput % 3 ===0 && userInput % 5 === 0){
    console.log("your number is divisible by both 3 nd 5");
}else{
    console.log("sorry");
};*/

// Question 6: Write a program that takes two numbers, compares them using comparison operators (like >, <, ===, !==) and prints the results.
let firstNum= 89;
let secondNum= 34;
console.log("firstNum > secondNum gives", firstNum>secondNum);
console.log("firstNum < secondNum gives", firstNum<secondNum);
console.log("firstNum === secondNum gives", firstNum===secondNum);
console.log("firstNum !== secondNum gives", firstNum!==secondNum);

// Question 7: Write a program that declares two boolean variables, applies logical operators (&&, ||, !), and prints the result.
let myVariable= true;
let yourVariable= false;
console.log("myVariable && yourVariable gives", myVariable && yourVariable , "as AND operator only gives true when both val are true");
console.log("myVariable || yourVariable gives", myVariable || yourVariable , "as OR operator gives true when even one val is true");
console.log("!(yourVariable) gives", !(yourVariable) , "as NOT operator do the opposite");

// Question 8: Write a program that takes a number, adds 10 to it using the += operator, multiplies it by 2, and prints the final result.
let userNum = prompt("Enter any number:");
userNum=Number.parseInt(userNum);
userNum+=10;
let multiply= userNum*2;
console.log(multiply);

// Question 9: Write a program that creates an object to store information about a car (e.g., make, model, year). Then, print the car's details using dot notation.
let myCar={
    make:"Toyota",
    model:"Corolla",
    year:2020,
};
console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.year);

// Question 10: Write a program that creates an object with your name, age, and a method that returns a greeting message like, "Hello, my name is [your name]."
// let myInfo={
//     myName:"Alisha Khalid",
//     age:19,
//     str:"Hello, my name is"
// };
// console.log(myInfo["str"], myInfo["myName"]);

// or (a better approach)
let myInfo = {
    myName: "Alisha Khalid",
    age: 19,
    greet: function() {
        return `Hello, my name is ${this.myName}.`;  // Using a method to return the greeting
    }
};
console.log(myInfo.greet());  // Call the method to print the greeting

// Array Operations:
// Write a program that takes an array of numbers and prints the sum of all elements using a loop.

// FizzBuzz Challenge:
// Write a program that prints numbers from 1 to 50. For multiples of 3, print "Fizz", for multiples of 5 print "Buzz", and for multiples of both 3 and 5, print "FizzBuzz".

// Prime Number Check:
// Write a program that checks if a number entered by the user is prime. A prime number is only divisible by 1 and itself.

// Object Manipulation:
// Create an object that stores information about a person (name, age, and hobbies). Write a method in the object that prints all of the person's hobbies.

// Array and Conditional Combo:
// Write a program that takes an array of numbers and prints only the even numbers. Use the filter() method or a loop with conditional statements.

// These will help level up your problem-solving and logic-building skills. Keep practicing, and you’ll see your logic become even sharper!





