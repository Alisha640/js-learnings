//GAME
// QUIZ GAME

// hints:
/*Set Up Questions and Answers:
Create an array of questions. Each question can be an object containing the question text and possible answers.
Ask Questions:
Use a loop to go through each question, prompting the user for an answer.
Check Answers:
Compare the user's answer to the correct answer and keep track of the score.
Display Results:
After all questions are answered, display the user’s score.*/

let questionAns = [
  {
    question: "What does console.log() do in JavaScript?",
    options:
    "A) Displays an alert box   B) Prints messages to the console   C) Writes to the HTML document",
    answer: "B",
  },
  {
    question:
    "Which of the following is the correct way to declare a variable in JavaScript?",
    options: "A) variable x = 10   B) var x = 10   C) int x = 10;",
    answer: "B",
  },
  {
    question: "Which operator is used for strict equality in JavaScript?",
    options: "A) ==   B) !=   C) ===",
    answer: "C",
  },
  {
    question: "How do you create a function in JavaScript?",
    options:
    "A) function myFunction(){}   B) func myFunction(){}   C)create function myFunction(){}",
    answer: "A",
  },
  {
    question:
    "Which of the following methods is used to add a new item to the end of an array in JavaScript?",
    options: "A) array.add()   B) array.push()   C) array.insert()",
    answer: "B",
  },
];

let total=10;
let score=0;
for (let i = 0; i < questionAns.length; i++) {
  let q = questionAns[i].question;
  let option = questionAns[i].options;
  let ans = questionAns[i].answer;
  console.log(q);
  let input = prompt(option).toUpperCase();
  if (input===ans) {
    console.log(`Your answer ${input} is absolutely CORRECT!`);
    score+=2;
  } else {
    console.log(`Your answer; ${input} is wrong. The correct answer is ${ans}`);
  }
};

console.log(`Good Job! Your total score is ${score}/${total}`);


