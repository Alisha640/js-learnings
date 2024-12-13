// Exploring console
// console is an obj w multiple functions 

// 1)console obj 
console.log(console);

// 2)console.log(): prints the msg
console.log("hello Alisha here!");

// 3)console.error(): to generate a err msg in console
console.error("Error 404: page not found");

// 4)console.warn(): generates a warning
console.warn("Do not click on red button");

// 5)console.info(): prints any info, it is similar to log
console.info("This is an important info");

// 6)console.assert(): if ur assertion is True all is well else it throws an err
console.assert(55>100); //failed cuz FALSE nd failed assertions r counted as err
// console.assert(55<100); //won't be failed

// console.time() nd console.timeEnd(): determines the time of something ex: lets see how much time this for loop takes
console.time("forLoop");
for (let i = 0; i < 5; i++) {
    console.log("Hello world!") ;
};
console.timeEnd("forLoop");

// lets check for while loop too 
console.time("whileLoop");
let i=0;
while (i<5) {
    console.log("Hello world!");
    i++;
};
console.timeEnd("whileLoop");

// console.table(): allows u to see the data in tabular form. ex: objects
let myObj={
    myName:"Alisha",
    myNumber: 1075368,
    myAge: 19,
    myMessage:"Hello"
};
console.table(myObj);

// console.clear(): clears the console
// console.clear();
