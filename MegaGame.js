// GAME NAME: "WORD SCRAMBLE GAME" by gpt
/*Setup the Game:Function: Create a function to select a random word from a list of words.
Hint: Use an array of words and select one randomly.
Scramble the Word: Function: Create a function to scramble the letters of the chosen word.
Hint: Shuffle the letters of the word. Consider using a simple algorithm to rearrange the letters randomly.
Display the Scrambled Word:Function: Create a function to display the scrambled word to the user.
Hint: Use alert or prompt to show the scrambled word.
Get User’s Guess: Function: Create a function to get the user’s guess for the unscrambled word.
Hint: Use prompt to capture the user’s input.
Check the Guess: Function: Create a function to check if the user’s guess is correct.
Hint: Compare the user’s guess with the original word.
Provide Feedback: Function: Create a function to provide feedback on the guess. If incorrect, give a hint or let the user try again.
Hint: Provide a message indicating whether the guess was correct or not.
Track Attempts: Function: Create a function to keep track of the number of attempts the user has made.
Hint: Decrement the number of allowed attempts after each guess.
End the Game: Function: Create a function to end the game and display the final result after the user either guesses correctly or runs out of attempts.
Hint: Use alert to show a message with the number of attempts and whether the user won or lost.
Play Again Option: Function: Create a function to ask if the user wants to play again using confirm. If yes, restart the game; if no, end the game.
Hint: Use a confirm dialog to get the user’s choice to play again.*/

let wordList=["chair","scissors","orange","hamburger","head","teacher","city","phone","bell","parrot"];
let min=0;
let max=wordList.length-1;
let randomWord = Math.floor(Math.random() * (max - min + 1)) + min;
let getWord;
let arr0fWord;
let attempts = 3;

for (let i = 0; i < wordList.length; i++) {
    if (randomWord==i) {
        getWord=wordList[i];
        // console.log(getWord);
    } ;
};
const shuffling=(getWord)=>{
    arr0fWord=getWord.split('');
    for (let i = 0; i < arr0fWord.length; i++) {
      let randomIndex = Math.floor(Math.random() * arr0fWord.length);
      [[arr0fWord[i]], [arr0fWord[randomIndex]]] = [[arr0fWord[randomIndex]],[arr0fWord[i]]];
    }
    let jointWord= arr0fWord.join("");
    return jointWord;
};
let scrambledWord = shuffling(getWord);

const showScrambledWord = (scrambledWord) => {
  alert(`The scrambled word is ${scrambledWord}`);
};
showScrambledWord(scrambledWord);

const userGuess = (scrambledWord) => {
  let userInput = prompt(`Enter the correct version of: ${scrambledWord}`);
  return userInput;
};
let input= userGuess(scrambledWord);

const comparison=(input,getWord)=>{
    if (input==getWord) {
      alert("Your guess is CORRECT!")
      return true;
    } else {
      alert("Your guess is Wrong. Try Again");
      return false;
    }
};

if (!(comparison(input,getWord))) {
  const repeatAsking = (attempts) => {
    for (let i = 0; i < attempts; i++) {
      console.log(`Attempts left; ${attempts=attempts-1}/3`);
      let newInput= userGuess(scrambledWord);
      if(comparison(newInput,getWord)){
        break;
      };
    }
  };
  repeatAsking(attempts);
};

