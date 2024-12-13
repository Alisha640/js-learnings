// Q#1
console.log("har\"".length);

// Q#3
let given="ALISHA Khalid";
console.log(given.toLowerCase());

// Q#4
let str= "Please give Rs.1000";
let extract = Number.parseInt(str.slice(15));
console.log(extract);
console.log(typeof extract); //as i have extracted a num from a str now i want to make that num actual number so use parseint

// Q#5
str[4]="y";  //converting s to y
console.log(str); //cant do cuz string is immutable

// Q#2
// Explore includes, startsWith nd endsWith functions of a string from MDN 
// INCLUDES- check whether a particular str is present in the parent str. if yes, it prints TRUE else FALSE 
let text = "Hello world, welcome to the universe.";
let result = text.includes("world");
console.log(result); //true
let result2 = text.includes("Alisha");
console.log(result2);

const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox";
console.log(sentence.includes(word));
console.log(`The word "${word}" ${sentence.includes(word) ? "is" : "is not"} in the sentence`);

// startsWith & endsWith- startsWith() returns true if a string starts with a specified string else it gives false ns sme for endsWith method
let txt = "Hello world, welcome to the universe.";
let res = txt.startsWith("Hello", 1);
console.log(res);
let res2 = txt.startsWith("Hello");
console.log(res2);

let mySentence="Hello everyone! Alisha here";
console.log(mySentence.endsWith("here"));
console.log(mySentence.endsWith("her"));

