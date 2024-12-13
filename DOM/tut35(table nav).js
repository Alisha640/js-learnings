let t=document.body.firstElementChild.firstElementChild; //accessed the table

// ACCESSING THE MAIN PARTS OF TABLE 
console.log(t.rows);
console.log(t.caption);
console.log(t.tHead);
console.log(t.tBodies);

// ACCESSING THE TABLE'S TBODY'S ROWS 
console.log(t.tBodies[0].rows); //have to specify the index of tbody as it's an html collection which is an arr like obj

// ACCESSING THE TABLE'S ROWS BY THEIR INDEX
console.log(t.rows[0]); //will print the first row of the table
console.log(t.rows[1]); //will print the second row of the table
console.log(t.rows[2]); //will print the third row of the table
console.log(t.rows[3]); //will print the fourth row of the table

// ACCESSING THE TABLE'S ROWS' CELLS
console.log(t.rows[0].cells); //will print the first row's all cells 
console.log(t.rows[1].cells); //will print the second row's all cells 
console.log(t.rows[2].cells); //will print the third row's all cells 
console.log(t.rows[3].cells); //will print the fourth row's all cells 

// CHECKING THE INDEX OF ROWS OF TABLE 
let firstRow = t.rows[0]; // Access the first row (index 0)
console.log(firstRow.rowIndex); // Get the index of the first row
let secondRow = t.rows[1];
console.log(secondRow.rowIndex);
let thirdRow = t.rows[2];
console.log(thirdRow.rowIndex);
let fourthRow = t.rows[3];
console.log(fourthRow.rowIndex);

// CHECKING THE INDEX OF CELLS OF ROWS
// let firstRow = t.rows[0]; // Access the first row (index 0) already been acccessed so cmt it down
let firstCell = firstRow.cells[0]; // Access the first cell in the first row (index 0)
console.log(firstCell.cellIndex); // Get the index of that cell in its row
let secondCell = secondRow.cells[1];
console.log(secondCell.cellIndex);
let thirdCell = thirdRow.cells[2];
console.log(thirdCell.cellIndex);
// let fourthCell = fourthRow.cells[2];
// console.log(fourthCell.cellIndex);