// GAME:
// GUESS THE WORD 

// hints
/*Word Setup:
“I’m thinking of a word with 5 letters.”
User Guess:
User inputs a letter.
Feedback:
“Correct! The letter is in the word.” or “Wrong guess. Try again!”
Game End:
If the user guesses the word: “Congratulations! You guessed the word!”
If the user runs out of attempts: “Game over! The word was [word].”*/

let originalWord= "candy";
let totalAttempts=7;
for (let i = 1; i <= totalAttempts; i++) {
    let userGuess=prompt("Guess the letter:");
    if (userGuess==="c"||userGuess==="a"||userGuess==="n"||userGuess==="d"||userGuess==="y") {
        console.log("Correct! The letter is in the word.");
    } else {
        console.log("Wrong guess. Try again!");
    };
    // console.log("Congratulations. You won!");
};
console.log("You lost. You went out of attempts");