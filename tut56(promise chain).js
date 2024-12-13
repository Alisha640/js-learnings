// PROMISE CHAINING => is used to link one promise with multiple .then(), instead of writing so many callbacks (callback hell/pyramid of doom) we can follow this approach
// read from notes
//basically wot we r doing is; creating a promise nd when it is resolved its val is accesssed in a .then() where we generate another custom promise nd its val is accessed in next .then()

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(55);
  }, 2000);
});

p1.then((value) => {
  console.log(value);
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("This is my custom promise"); //do not write like this in promise btw use .then() for this
      resolve(true);
    }, 3000);
  });
  return p2;
})
  .then((value) => {
    console.log("we r done with p2. here is the val", value);
    return 2; //u've noticed now this is not a promise. but it is CONVERTED TO RESOLVED PROMISE by js itself
  })
  .then((value) => {
    console.log(value);
  });
