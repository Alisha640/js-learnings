// Q#1 nd Q#2
// const loadScript = async (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;
//     script.type = "text/javascript";
//     document.head.append(script);
//     script.onload = () => {
//       resolve(src);
//     };
//   });
// };
// loadScript_Calling = loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
// );
// loadScript_Calling.then((value) => {
//   alert("Done with loading " + value);
// });

// const loadScript_Calling = async () => {
//   let a = await loadScript(
//     "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
//   );
//   console.log(a + " successfully loaded");
// };
// loadScript_Calling();

// Q#3
// const myFunction = async () => {
//   let my_promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("Unexpected err ocurred"));
//     }, 3000);
//   });
//   try {
//     let my_promiseVal = await my_promise;
//     return my_promiseVal;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// myFunction();

// Q#4(imp question)
let p1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Value 1");
    }, 2000);
  });
};
let p2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Value 2");
    }, 2000);
  });
};
let p3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Value 3");
    }, 3000);
  });
};

const results = async () => {
  console.time("results");
  //   let r1 = await p1();
  //   let r2 = await p2();
  //   let r3 = await p3();
  //   console.log(r1, r2, r3); //takes 7 seconds by awaiting them individually

  let r1 = p1();
  let r2 = p2();
  let r3 = p3();
  let r1r2r3 = await Promise.all([r1, r2, r3]);
  console.log(r1r2r3); //takes 3 seconds by awaiting them all together
  console.timeEnd("results");
};

results();
