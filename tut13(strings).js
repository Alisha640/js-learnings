//STRINGS store the text nd manipulates them
let myName = "Harry";
// console.log(myName);
// console.log(myName.length) //5
console.log(myName[0]);
console.log(myName[1]);
let friend = "Prakash";
console.log(friend);
// let myfriend = "Shubh' // Dont do this

// Template literals 
let boy1 = "Pramod";
let boy2 = "Nikhil";
// Nikhil is a friend of Pramod
let sentence = `${boy2} is a friend of ${boy1}`;  //STRING INTERPOLATION: to insert variables in template literals
console.log(sentence);

// Escape Sequence Characters: special ch that consist of two ch but treated as ONE
// let fruit = 'Bana\'na'
// console.log(fruit)
let fruit = 'Bana"na';
console.log(fruit);
let vegi= "brocli\nbrinjal";
console.log(vegi);
let marks="Amna scored \t 90";
console.log(marks);
// let me="Alisha the \r great";
// console.log(me);
