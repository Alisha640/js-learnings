/*
Task 1: Change Navigation Bar Background Color
Use getElementById to select the navigation bar and change its background color to "lightblue".

Task 2: Change Card Background Colors
Use querySelectorAll to select all cards and set:

The first card's background color to "yellow".
The second card's background color to "green".
The third card's background color to "pink".
Task 3: Change Text Content of a Card
Use querySelector to select the first card’s text (with the class card-text) and change the text to "Updated text for card 1".

Task 4: Change Span Background Colors
Use getElementsByTagName to select all span elements and change their background color to "lightgray" and text color to "blue".

Task 5: Update Input Placeholder
Use getElementsByName to select the input field and change its placeholder text to "Search here...".

Task 6: Change Border of Container
Use getElementsByClassName to select the first element with the class container and set its border to "5px dashed red".

Task 7: Change Image Source
Use querySelector to select the image inside the first card (.card-img-top) and change the src attribute to a new image URL, such as:
"https://via.placeholder.com/200".

Task 8: Loop Through and Modify Span Elements
Use getElementsByTagName to select all span elements, then use a loop to:

Change the text of the first span to "Updated Span 1".
Change the text of the second span to "Updated Span 2".
Change the text of the third span to "Updated Span 3".
Task 9: Modify Styles for All Card Texts
Use querySelectorAll to select all card-text elements and change their text color to "purple".

Task 10: Add Padding to the Container
Use getElementsByClassName to select the first container and add 20px of padding to it.*/

// TASK#1
let nav = document.getElementById("myNav");
nav.style.backgroundColor = "lightblue";

// TASK#2
let myCards=document.querySelectorAll(".card");
myCards[0].style.backgroundColor = "yellow";
myCards[1].style.backgroundColor = "green";
myCards[2].style.backgroundColor = "pink";

// TASK#3
let cardText=document.querySelector(".card-text");
cardText.textContent = "Updated text for card 1";

// TASK#4
let mySpans=document.getElementsByTagName("span");
mySpans[0].style.backgroundColor = "lightgray";
mySpans[0].style.color = "blue";
mySpans[1].style.backgroundColor = "lightgray";
mySpans[1].style.color = "blue";
mySpans[2].style.backgroundColor = "lightgray";
mySpans[2].style.color = "blue";

// TASK#5 
let myInput=document.getElementsByName("search")[0];
myInput.placeholder= "Search here...";

// TASK#6
let myContainer=document.getElementsByClassName("container")[0];
myContainer.style.border = "5px dashed red";

// TASK#7
let card1_Img = document.querySelector(".card-img-top");
card1_Img.src = "https://via.placeholder.com/200";

// TASK#8
let allSpans=document.getElementsByTagName("span");
let num=0;
let updation;
for (let i = 0; i < allSpans.length; i++) {
    num=num+1;
    updation="Updated Span"+num;
    allSpans[i].textContent=updation;
};

// TASK#9
let cardTxt = document.querySelectorAll(".card-text");
cardTxt[0].style.color="purple";
cardTxt[1].style.color="purple";
cardTxt[2].style.color="purple";

// TASK#10
let containerPadding=document.getElementsByClassName("container")[0];
containerPadding.style.padding="20px";

/*Sum of Numbers: Write a loop to calculate the sum of numbers from 1 to 10.
Multiplication Table: Use a loop to generate a multiplication table for numbers 1 to 5.
Filter Even Numbers: Use a loop to filter and print even numbers from an array of numbers.*/