// Async Await syntax: is a refined syntax that can be replaced with .then(). wot actually happens is; an async function is created in which u put all that logic where u wanna wait for sth to complete first before jumping to next. normally doing this thing is js quite challenging. also remember that async function is the one that will alaways return a Promise. we can say an async func is created to await some promise in it. await keyword can only be used in async functions

// async function sample() {
//   return 5;
// }
// sample().then(alert);
// if i remove this async from before the func it will throw an err that .then() is NOT A FUNCTION because it is async that returns anything in it (in this case return 5) as a promise nd .then() works only for promises

async function weatherUpdate() {
  let bahwalpurWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("35 degrees");
    }, 3000);
  });
  let lahoreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("28 degrees");
    }, 6000);
  });

  console.log("Fetching Bahawalpur Weather...");
  let bwp_weather = await bahwalpurWeather; //we have logged the results before nd after to make sure await keywords makes the func wait till the promise is fulfilled nd results r stored inside the var
  console.log("Bahawalpur Weather update:", bwp_weather);
  console.log("Fetching Lahore Weather...");
  let lhr_weather = await lahoreWeather;
  console.log("Lahore Weather update:", lhr_weather);
  return [bwp_weather, lhr_weather]; //returning the val of res so that they can accesssed outside
}

// let got_Updates = weatherUpdate();
// got_Updates.then((value) => {
//   console.log(value);
// });

// when two async functions run they run parallely. let's see this first, then to arrange the results in order we will await them
// let's make another async func
const secondFunc = async () => {
  console.log("i am the second async, jst here for some exp"); //anything in async is treated as promise
};

// thats how we awaited both of them so that we can get ordered results
const got_Results = async () => {
  let func1 = await weatherUpdate();
  let func2 = await secondFunc();
};
got_Results();
