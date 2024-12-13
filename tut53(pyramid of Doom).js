// PYRAMID OF DOOM => is the pyramid of calls that cause the code to grow in horizontal way makng it confusing. Promises r the solutions for this
// we will be copying the same code from tut52 nd make pyramid

function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;

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

function hello(err, src) {
  if (err) {
    console.log(err);
    return;
  }
  alert("hello world!" + src);
}

loadScript(
  "https://cdn.jsakdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
  function morning(err, src) {
    if (err) {
      console.log(err);
      return;
    }
    alert("Good morning!" + src);

    loadScript(
      "https://cdn.jsakdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
      function morning(err, src) {
        if (err) {
          console.log(err);
          return;
        }
        alert("Good morning!" + src);

        loadScript(
          "https://cdn.jsakdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
          function morning(err, src) {
            if (err) {
              console.log(err);
              return;
            }
            alert("Good morning!" + src);

            loadScript(
              "https://cdn.jsakdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
              function morning(err, src) {
                if (err) {
                  console.log(err);
                  return;
                }
                alert("Good morning!" + src);

                loadScript(
                  "https://cdn.jsakdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
                  function morning(err, src) {
                    if (err) {
                      console.log(err);
                      return;
                    }
                    alert("Good morning!" + src);

                    loadScript(
                      "https://cdn.jsakdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
                      function morning(err, src) {
                        if (err) {
                          console.log(err);
                          return;
                        }
                        alert("Good morning!" + src);
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  }
);
//  this is the pyramid 
