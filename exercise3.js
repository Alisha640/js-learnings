let jokesArr = [
  "Why dont skeletons fight each other? They dont have the guts.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why dont eggs tell jokes? Theyd crack each other up.",
  "Why couldnot the bicycle stand up by itself? It was two-tired.",
  "I told my computer I needed a break, now it wont stop sending me Kit-Kats.",
  "Why are ghosts bad at lying? Because theyre too transparent.",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  "I only know 25 letters of the alphabet. I dont know Y.",
  "Parallel lines have so much in common. Its a shame theyll never meet.",
  "Why cannot you give Elsa a balloon? Because shell let it go!",
  "What did one wall say to the other? I will meet you at the corner.",
  "Why was the math book sad? It had too many problems.",
  "Im reading a book about anti-gravity. Its impossible to put down.",
  "What do you call fake spaghetti? An impasta!",
  "Why dont some couples go to the gym? Because some relationships dont work out.",
  "What do you call a bear with no teeth? A gummy bear!",
  "Why did the tomato blush? Because it saw the salad dressing!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Whats brown and sticky? A stick.",
  "Why do cows wear bells? Because their horns dont work!",
];
let min=0;
let max=jokesArr.length-1;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

for (let i = 0; i < jokesArr.length; i++) {
    if (randomNum==i) {
        let getJoke=jokesArr[i];
        console.log(document.getElementsByTagName("div")[0].firstElementChild.innerHTML=getJoke);
    } ;
};

// by chatgpt
// Get a random joke and display it in the <div>
// function displayRandomJoke() {
//   let randomIndex = Math.floor(Math.random() * jokesArr.length);
//   let randomJoke = jokesArr[randomIndex];
//   // Select the <p> element inside the first <div> and update its content
//   document.querySelector("div p").innerHTML = randomJoke;
// }
// // Call the function to display a random joke immediately when the page loads
// displayRandomJoke();