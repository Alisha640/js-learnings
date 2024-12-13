
let choices=["snake", "gun", "water"];
let userScore=0;
let computerScore=0;
let rounds=3;


const gameLogic=(userChoice,computerChoice)=>{

    if (userChoice == "water" && computerChoice == "gun"){
         alert("You won!");
         userScore++;
      }
    else if(userChoice == "gun" && computerChoice == "snake"){
        alert("You won!");
        userScore++;
    }
    else if(userChoice == "snake" && computerChoice == "water"){
      alert("You won!");
      userScore++;
    } 
    else if(userChoice == "gun" && computerChoice == "water"){
        alert("Computer won!");
        computerScore++; 
    }
    else if(userChoice == "snake" && computerChoice == "gun"){
        alert("Computer won!");
        computerScore++;
    }
    else if(userChoice == "water" && computerChoice == "snake"){
      alert("Computer won!");
      computerScore++;
    } 
    else if(userChoice==computerChoice){
      alert("It's a tie");
    };
}

let i=0;
while (i<rounds) {
    const getComputerChoice = () => {
      let randomIndx = Math.floor(Math.random() * choices.length);
      return choices[randomIndx];
    };
    let computerChoice = getComputerChoice();
    let userChoice = prompt("Choose any one of these: water/gun/snake").toLowerCase();
    if (choices.includes(userChoice)) {
        gameLogic(userChoice,computerChoice);
        i++;
    }else{
        console.error("Please enter a valid choice");
    }
    // gameLogic(userChoice, computerChoice);
    // i++; 
};


if (userScore>computerScore) {
        alert("Congratulations, You won the game.");
    }else if(userScore<computerScore){
        alert("You lost...Computer won.");
    }else{
        alert("It's a tie");
    };
console.log(`Your final score is ${userScore} and computer's final score is ${computerScore}`);




