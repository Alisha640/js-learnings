// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19];
let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419];

// delete operator
// console.log(num.length);
// delete num[0]; //delete is an operator like typeof not a method
// console.log(num, num.length); //after deleting an el empty space remains due which the length of arr remains unchanged

// concat method
// let newArray = num.concat(num_more, num_even_more);
// console.log(newArray);
// console.log(num, num_more) //original ones do not change

// sort method (sorts alphabetically not in asc or desc order for that u have to create compare function nd give it as an argument to sort method)
// let compare = (a, b) => {
//   return b - a; //this is for desc nd a-b for asc
// };
let num = [551, 22, 3, 14, 5, 6, 7, 8, 229];
// console.log(num.sort()); //sorts alphabetically
// console.log(num.sort(compare));

// reverse method
// num.reverse();
// console.log(num); //reversed all el of arr

// Splice method (syntax: where to add, how many to del, wot to add)(also returns deleted el)
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229];
// let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025);
// console.log(num);
// console.log(deletedValues); //shows an arr that contain all the deleted values

// slice method
// let newNum = num.slice(3) //3 to onwards till end
// let newNum = num.slice(3, 5); //won't include the el on last index
// console.log(newNum);
