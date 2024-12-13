// WE R GOING TO LOAD A RANDOM SCRIPT USING PROMISES (the same thing that we did without promises in earlier tut)
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);
    script.onload = (script) => {
      resolve("Your script has been successfully loaded");
    };
    script.onerror = () => {
      reject(new Error("ERROR!"));
    };
  });
};

let loadScript_Calling = loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
);
loadScript_Calling
  .then((value) => {
    console.log(value);
    return loadScript(
      "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
    );
  })
  .then((value) => {
    console.log("NEXT SCRIPT IS READY!");
  }) //like this u load as many scripts as u want
  .catch((error) => {
    console.log("Sorry! Couldn't load your script. Try again later...");
  });
