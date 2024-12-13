let myPromise = new Promise((resolve, reject) => {
  console.log("promise is pending (not resolved yet)");
  setTimeout(() => {
    resolve(1);
  }, 3000);
});
myPromise
  .then((value) => {
    console.log("This is the val of promise:", value);
  })
  .then(() => {
    console.log("promise is successfully resolved after 3 sec");
  })
  .then(() => {
    console.log("it's the third handler y'all");
  });

//now the question is how its diff from promise chain? remember that;
// in PROMISE CHAINING the .then() r linked w one another (as the return val of previous promise is used in the next .then method)
// in MULTIPLE PROMISE HANDLERS .then()/handlers r not connected. they r used to perform diff things on the same promise but all things r diff from one another. no return val is required there
