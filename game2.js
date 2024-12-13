//GAME
//BASIC CALCULATOR

//hints:
// Prompt the user to enter the first number.
// Prompt the user to enter an operator (+, -, *, /).
// Prompt the user to enter the second number.
// Use conditionals to check which operator was entered and perform the corresponding calculation.
// Display the result.

let input1 = Number.parseInt(prompt("Enter first number:"));
let operator = prompt("Choose an operator: +,-,*,/,%,**");
let input3 = Number.parseInt(prompt("Enter second number:"));

if (operator == "+") {
  let result = input1 + input3;
  console.log(`The result of ${input1} + ${input3} is ${result}`);
} else if (operator == "-") {
  let result = input1 - input3;
  console.log(`The result of ${input1} - ${input3} is ${result}`);
} else if (operator == "*") {
  let result = input1 * input3;
  console.log(`The result of ${input1} * ${input3} is ${result}`);
} else if (operator == "/") {
  let result = input1 / input3;
  console.log(`The result of ${input1} / ${input3} is ${result}`);
} else if (operator == "%") {
  let result = input1 % input3;
  console.log(`The result of ${input1} % ${input3} is ${result}`);
} else if (operator == "**") {
  let result = input1 ** input3;
  console.log(`The result of ${input1} ** ${input3} is ${result}`);
} else {
  console.log("Invalid operator. Please choose one of +, -, *, /, %, **.");
}

