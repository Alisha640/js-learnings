// .then() nd .catch() methods r used to notify urself that ur promise is fulfilled or not
// .then() is mostly to get the val nd .catch() is to catch/handle the errors
// .then() that do both things aswell

// first we r going to see wot is resolve nd reject
let p1 = new Promise((resolve, reject) => {
  console.log("Promise 1 is pending...");
  setTimeout(() => {
    console.log("Promise 1 is resolved"); //actually we do this stuff through .then() thats y cmtting it
    resolve(true);
  }, 3000);
});
let p2 = new Promise((resolve, reject) => {
  console.log("Promise 2 is pending...");
  setTimeout(() => {
    console.log("Promise 2 is rejected");
    reject(new Error("Unexpected Error"));
  }, 3000);
});

p1.then((value) => {
  console.log(value);
}); //when p1 will resolve .then() will get it's val

// p2.catch((error) => {
//   console.log("An error occurred while running the program");
// }); //when p2 gives err it catches it so that no err is displayed in console

p2.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
); //thats how we can use .then() to do both things. what actually happened is: val func became null nd err func executed as p2 contained err in it
// if i remove this error func part ofc it WILL show an err in console as we won't be handling err in that case
// like this;

// p2.then(
//   (value) => {
//     console.log(value);
// });

// in the notes there were some other examples toolbar. let's do it;
let p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("true");
  }, 5000);
});
p3.then(alert);
//we gave resolve val= true nd then got that val using .then() in the form of alert

// WE R EXECUTING THESE PIECES OF CODE (that r inside the promises) SIMULTANEOUSLY SO BASICALLY PROMISES HELP US IN DOING ASYNCHRONOUS PROGRAMMING
