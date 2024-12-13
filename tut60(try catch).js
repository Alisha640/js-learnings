// Try Catch method: sometimes the flow of ur script breaks or script dies if a single err appears so wot u can do is u can simply catch that err using try catch method. how it works? u put sth thats causing err in try (js engine tries it) then u can catch it if it throws err

setTimeout(() => {
  console.log("Hacking into account: mahnur.6...");
}, 1000);
setTimeout(() => {
  console.log("Bypassing security protocols...");
}, 2000);
setTimeout(() => {
  console.log("Accessing user data...");
  // console.log(mahnur); //it will throw err but src won't die, for that write it outside settimeout
}, 3000);
// console.log(mahnur); //will throw err nd src will die after this (src before this piece of code will be loaded but when the err will be encountered src after that err will die)

try {
  console.log(mahnur);
} catch (error) {
  console.log(error);
} //thats how we will handle the err nd prevent src from dying

// try {
//   setTimeout(() => {
//     console.log(mahnur);
//   }, 200);
// } catch (error) {
//   console.log(error);
// } //here the try catch method won't work as it works on synchronous code nd rn the code inside it i-e; settimeout is scheduled nd try catch will not work for this

setTimeout(() => {
  console.log("Retrieving account information...");
}, 4000);
setTimeout(() => {
  console.log("Data acquisition in progress...");
}, 5000);
setTimeout(() => {
  console.log("Access granted. Welcome, mahnur.6.");
}, 6000);
