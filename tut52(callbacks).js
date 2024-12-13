//ASYNC PROGRAMMING: we initiate sth nd sooner or later it executes (thrown in waiting list until the time comes)
// console.log("start");
// setTimeout(() => {
//     alert("Hello, I am Alisha");
//     console.log("your async function completed");
// }, 3000);
// console.log("end");
// (actually wot happened here is that console.log("start") nd console.log("end") executed earlier nd after 3 sec setTimeout executed till then it was in waiting list)

// SYNC PROGRAMMING: we initiate sth nd finish at the same time
// alert("You are welcome!");
// alert("Your entry point is 34");
// alert("Read the guidelines");
// alert("ThankYou for visiting our site");
// They'll be executed one by one thats wot sync means

// CALLBACKS: r the func passed as an argument in other func
function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  // script.onload=function() {
  //    console.log("your src has been loaded successfully!");
  // }; //this was to inform myself that my src is loaded let's see wot else can be done

  script.onload = function () {
    console.log("your src has been loaded successfully!");
    callback(null, src);
  };

  script.onerror = function () {
    console.log("An unexpected error occured while loading src");
    callback(new Error("src got some error"));
  };

  document.body.appendChild(script);
}

// making callbacks to use
function hello(err, src) {
  if (err) {
    console.log(err);
    return;
  }
  alert("hello world!" + src);
}

function morning(err, src) {
  if (err) {
    console.log(err);
    return;
  }
  alert("Good morning!" + src);
}

loadScript(
  "https://cdn.jsakdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
  hello
);
//as i wrote ak after js in this src thats y now err logic will execute
