// ARRAY- a variable that holds many val/items 

let marks_class_12 = [91, 82, 63, 84, false, "Not Present"]; //also contain items w diff datatypes
// accessing the val of arr through index 
console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log(marks_class_12[6]); // Will be undefined because index 6 does not exist 
// checking length that addEventListenerlways begin w 1 
console.log("The length of marks_class_12 is", marks_class_12.length); 
// Adding a new value to the array
marks_class_12[6] = 89; 
// Changing the value of an array cuz ARR IS MUTABLE 
marks_class_12[0] = 96; 

console.log(marks_class_12);

console.log(typeof marks_class_12); //arr is an obj 
