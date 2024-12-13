// HACKERMAN
let promise_arr = [
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hacking into account: mahnur.6");
    }, 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Bypassing security protocols...");
    }, 3000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Accessing user data...");
    }, 4000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Retrieving account information...");
    }, 5000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data acquisition in progress...");
    }, 6000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Warning: Unauthorized access detected!");
    }, 7000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Error: Security breach imminent!");
    }, 8000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Attempting to override security systems...");
    }, 9000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Loading encryption algorithms...");
    }, 10000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Access granted. Welcome, mahnur.6");
    }, 11000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Warning: Your data is compromised!");
    }, 12000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Recommendation: Change your passwords immediately.");
    }, 13000);
  }),
];

const my_function = async () => {
  console.log(
    `%c
       _   _     _______
      | | | |   |__   __|   
      | |_| |__  ___| | ___   ___  _ __  
      | __| '_ \\| _ \\ |/ _ \\ / _ \\| '_ \\ 
      | |_| | | | | | (_) | (_) | | | |
       \\__|_| |_|_| |_|\___/ \\___/|_| |_|
    `,
    "color: red; font-family: monospace; white-space: pre;"
  );

  for (const el of promise_arr) {
    let promise_complete = await el;
    console.log(`%c${promise_complete}`, "color: green; font-weight: bold;");
  }

  let confirmation = confirm(
    "Click 'OK' to proceed to Instagram login page or 'Cancel' to abort."
  );
  if (confirmation) {
    window.location.href = "https://www.instagram.com/accounts/login/";
  } else {
    document.body.style.backgroundColor = "red";
    document.body.innerHTML = "<h1>Operation Aborted!<h1/>";
  }
};
my_function();
