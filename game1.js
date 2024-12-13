//GAME
//ROCK PAPER SCISSORS

// hints:
// User Input: Prompt the user for their choice.
// Generate Computer Choice: Randomly select an option for the computer.
// Determine Winner: Compare the choices and determine the winner.
// Display Results: Show the result of the round and the choices made.

let gameItems = ["rock", "paper", "scissors"];
let userChoice = prompt("Choose one: rock/paper/scissors");
let computerChoice = "paper";

function declareWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie";
  } else if (userChoice === "rock" && computerChoice === "paper") {
    return "Computer won!";
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    return "You won!";
  }
}

let result = declareWinner(userChoice, computerChoice);
console.log("computer chose:", computerChoice);
console.log("RESULT:", result);
