// PROMISES=> r the solution to callback hell/pyramid of doom. it is used to make things ORGANISED/ to increase CODE READABILITY/ for PARALLEL CODE EXECUTION.
// either a promise is rejected or resolved. if resolved it executes the code inside promisec, if rejected if throws err.

let promise = new Promise(function (resolve, reject) {
  alert("Hello");
  resolve(56);
});

console.log("Hello One");
setTimeout(function () {
  console.log("Hello Two in 2 seconds");
}, 2000);

console.log("My name is " + "Hello Three");
console.log(promise); //we printed promise to see that promise obj has two imp properties; 1)STATE 2)RESULT

// example;

// Fetch google.com homepage  ==> console.log("google.com homepage done")
// Fetch data from the data api
// Fetch pictures from the server
// Print downloading
// Rest of the script
