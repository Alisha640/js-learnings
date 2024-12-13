// 6 STATIC METHODS; that allow us to execute some piece of code after all promises r fulfilled (actually it waits for all promises to fulfill)

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value 1");
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value 2");
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value 3");
    // reject(new Error("error occured"));
  }, 3000);
});

// we can use the approach .then() if we want to do some work after each of above promises like;
// p1.then((value) => {
//   console.log(value);
// });
// p2.then((value) => {
//   console.log(value);
// });
// p3.then((value) => {
//   console.log(value);
// });
// but have u noticed by using this approach we r able to do sth AFTER EACH SINGLE PROMISE IS RESOLVED but we want to do sth when all promises r resolved...

// for that we will use those 6 methods;
// METHOD#1: Promise.all() takes all RESOLVED promises in the form of arr nd return their result in the form of arr, if any promise is rejected it throws err nd ignore all the results;
// let promises_all = Promise.all([p1, p2, p3]);

// METHOD#2: Promise.allSettled() is the solution to Promise.all(). if any one of the promises is rejected it still give the results of all other promises that r resolved nd for the one that is rejcted it gives its status;
// let promises_all = Promise.allSettled([p1, p2, p3]);

// METHOD#3: Promise.race() is the race in which the promise that is resolved first will be shown nd if that promise which is to won the race is rejected one it simply throws the err
// let promises_all = Promise.race([p1, p2, p3]);

// METHOD#4: Promise.resolve() resolve all the promises with the val u enter at last
// let promises_all = Promise.resolve("all promises resolved");

// METHOD#5: Promise.reject() rejects all the promises w the value u give at last
let promises_all = Promise.reject(404);
promises_all.then((value) => {
  console.log(value);
});
