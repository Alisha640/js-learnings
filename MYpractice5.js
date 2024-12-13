/*Problem 1
Write a function fetchUserData that returns a promise. If the user ID is less than 100, resolve the promise with a success message, otherwise reject it with an error message. Use setTimeout to simulate an API request delay of 2 seconds.
Problem 2
Create two promises that resolve after different time intervals (2 seconds and 4 seconds). Use Promise.all to return both results together and log them to the console.
Problem 3
Write a function checkWeather that returns a promise for fetching weather. If the city is "Karachi", resolve with "Weather is 30°C", otherwise reject with "City not found". Handle the rejection properly.
Problem 4
Create a promise that resolves with the number 5 after 3 seconds. Then, chain multiple .then() handlers to add 10, multiply by 2, and subtract 4. Log the final result.
Problem 5
Write an async function getWeatherUpdates that fetches weather updates for three cities (each city taking 2 seconds). Use await for each weather request but also try running them concurrently to compare the execution time.
Problem 6
Create a promise loadExternalScript that loads a given script URL (use any valid CDN link). Resolve the promise if the script loads successfully, otherwise reject it. Chain multiple script loads using .then() to load a second script after the first.
Problem 7
Create a promise-based function isEligible that checks if a user's age is over 18. If the age is less than 18, throw a custom error. Catch the error and print a message to the console.
Problem 8
Write a function loginProcess that simulates a login. First, simulate entering the username (2 seconds), then password (2 seconds). If both inputs are correct, resolve the promise; otherwise, reject it.
Problem 9
Use Promise.race() to simulate a race between two promises: one resolves after 3 seconds, and another rejects after 4 seconds. Log which promise wins the race.
Problem 10
Create a promise updateProfile that returns "Profile updated successfully" after 3 seconds. Handle it using async/await, and include error handling in case the promise is rejected.*/

// 1
// const fetchUserData = () => {
//   return new Promise((resolve, reject) => {
//     let input = prompt("Enter your ID;");
//     input = Number.parseInt(input);
//     setTimeout(() => {
//       if (input < 100) {
//         resolve("Your ID has been recorded");
//       }
//       if (!(input < 100)) {
//         reject(new Error("Invalid ERROR"));
//       }
//     }, 2000);
//   });
// };
// let got_results = fetchUserData();
// got_results
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 2
// const twoPromises = async () => {
//   let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P1 is resolved");
//     }, 2000);
//   });
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("P2 is resolved");
//     }, 4000);
//   });

//   let both_Results = await Promise.all([p1, p2]);
//   console.log(both_Results);
// };
// twoPromises();

// 3
// const checkWeather = () => {
//   let fetching_Weather = new Promise((resolve, reject) => {
//     let city = prompt("Enter the city name:").toLowerCase();
//     if (city === "karachi") {
//       resolve("30 degrees");
//     } else {
//       reject("City not found");
//     }
//   });
//   return fetching_Weather;
// };
// let got_updates = checkWeather();
// got_updates
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 4
// let my_promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 3000);
// });

// my_promise
//   .then((value) => {
//     let addition = value + 10;
//     return addition;
//   })
//   .then((value) => {
//     let multiplication = value * 2;
//     return multiplication;
//   })
//   .then((value) => {
//     let subtraction = value - 4;
//     console.log("The Final Result is", subtraction);
//   });

// 5
// const getWeatherUpdates = async () => {
//   let bwp_weather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("40 degreesl");
//     }, 2000);
//   });
//   let lhr_weather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("30 degrees");
//     }, 2000);
//   });
//   let isl_weather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("24 degrees");
//     }, 2000);
//   });
//   console.time("getWeatherUpdates");
//   let bwp = await bwp_weather;
//   let lhr = await lhr_weather;
//   let isl = await isl_weather;
//   console.log(bwp, lhr, isl);
//   //   let all_cities_weather = await Promise.all([
//   //     bwp_weather,
//   //     lhr_weather,
//   //     isl_weather,
//   //   ]);
//   //   console.log(all_cities_weather);
//   console.timeEnd("getWeatherUpdates");
// };
// getWeatherUpdates();
// 2469.453125 ms by using Promise.all
// 2002.6728515625 ms by awaiting separately

// 6
// const loadExternalScript = (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.type = "text/javascript";
//     script.src = src;
//     document.body.appendChild(script);
//     script.onload = () => {
//       resolve("src loaded successfully.");
//     };
//     script.onerror = () => {
//       reject(new Error("src failed to load. Try again"));
//     };
//   });
// };
// let gotResults = loadExternalScript(
//   "https://code.jquery.com/jquery-3.6.0.min.js"
// );
// gotResults
//   .then((value) => {
//     console.log(value, "Next src is ready");
//     return loadExternalScript(
//       "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"
//     );
//   })
//   .then((value) => {
//     console.log(value, "Next src is ready");
//     return loadExternalScript("https://code.jquery.com/jquery-3.6.0.min.js");
//   })
//   .then((value) => {
//     console.log(value, "Next src is ready");
//     return loadExternalScript(
//       "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
//     );
//   })
//   .then((value) => {
//     console.log("Done loading all the scripts");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 7
// const isEligible = () => {
//   return new Promise((resolve, reject) => {
//     let age = prompt("Enter your age:");
//     age = Number.parseInt(age);
//     if (age < 18) {
//       reject(new Error("Invalid age"));
//     } else {
//       resolve("Valid age");
//     }
//   });
// };
// let got_results = isEligible();
// got_results.catch((error) => {
//   console.log(error);
// });

// 8
// const loginProcess = () => {
//   let username_promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let enter_name = prompt("Enter your username:");
//       if (enter_name.length >= 5 && enter_name.toLowerCase()) {
//         resolve("Valid username");
//       } else {
//         reject(new Error("Invalid username"));
//       }
//     }, 2000);
//   });

//   let password_promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let enter_password = prompt("Enter your password:");
//       if (enter_password.length === 8) {
//         resolve("Valid password");
//       } else {
//         reject(new Error("Invalid password"));
//       }
//     }, 2000);
//   });

//   // return [username_promise, password_promise];
//   let both_promises = Promise.all([username_promise, password_promise]);
//   if (
//     enter_name.length >= 5 &&
//     enter_name.toLowerCase() &&
//     enter_password.length === 8
//   ) {
//   } else {
//   }
// };

// loginProcess();
// login_results
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 9.
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("resolved");
//   }, 3000);
// });
// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error("rejected"));
//   }, 4000);
// });

// let all_promises = Promise.race([p1, p2]);
// all_promises.then((value) => {
//   console.log(value, "p1 won the race");
// });

// 10.
const my_func = async () => {
  let updateProfile = new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = false;
      if (isSuccess) {
        resolve("profile is updated");
      } else {
        reject(new Error("failed to update"));
      }
    }, 3000);
  });
  try {
    let waiting = await updateProfile;
    console.log(waiting);
  } catch (error) {
    console.log(error.message);
  }
};
my_func();
