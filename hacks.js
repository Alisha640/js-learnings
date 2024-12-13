function delayLog(message, delay) {
  setTimeout(() => {
    console.log(`%c${message}`, "color: green; font-weight: bold;");
  }, delay);
}
console.log(
  "%cInitiating hacking sequence...",
  "color: green; font-weight: bold;"
);
// console.log("Initiating hacking sequence...");
delayLog("Hacking into account: mahnur_6...", 1000);
delayLog("Bypassing security protocols...", 2000);
delayLog("Accessing user data...", 3000);
delayLog("Retrieving account information...", 4000);
delayLog("Data acquisition in progress...", 5000);
delayLog("Warning: Unauthorized access detected!", 6000);
delayLog("Error: Security breach imminent!", 7000);
delayLog("Attempting to override security systems...", 8000);
delayLog("Loading encryption algorithms...", 9000);
delayLog("Access granted. Welcome, mahnur_6.", 10000);
delayLog("Warning: Your data is compromised!", 11000);
delayLog("Recommendation: Change your passwords immediately.", 12000);

setTimeout(() => {
  const proceed = confirm(
    "Click 'OK' to proceed to Instagram login page or 'Cancel' to abort."
  );
  if (proceed) {
    window.location.href = "https://www.instagram.com/accounts/login/";
  } else {
    console.log("%cOperation aborted!", "color: red; font-weight: bold;");
    document.body.style.backgroundColor = "red";
    document.body.innerHTML = "<h1>OPERATION ABORTED!<h1/>";
  }
}, 11000);
