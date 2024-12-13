// Exercise 1 (HINTS): Guess the number...
// let number; // Generate random number here through math.random
// let chances = 0;
// Keep asking for the number until the correct number is guessed by the user
// Increment the chances variable
// Eventually after the game is over, display the (100 - Number of chances) and the actual number

let min= 1;
let max= 100;
let randomNum= Math.floor(Math.random()*(max-min+1))+min;
console.log("random number is", randomNum); //keeps changing
let input;
let chances= 0;
while (input!==randomNum) {
  input = Number.parseInt(prompt("Guess the number"));
  if (input > randomNum) {
    console.log("Try Again...The number you entered is greater than the original number.");
  } else if (input < randomNum) {
    console.log(
      "Try Again...The number you entered is less than the original number.");
  }
  chances++;
};
console.log("You Won! You entered the the number that matches the original number. Here is the total number of your attempts:", chances , "and your score is:", max-chances);