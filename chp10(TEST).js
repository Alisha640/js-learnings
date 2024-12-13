// Q1 will be in projects folder as its an app
// Q2.
// let fetchInput = localStorage.getItem("note");
// alert("The note you saved is: " + fetchInput);
// let userInput = prompt("Enter your note:");
// if (userInput) {
//   localStorage.setItem("note", userInput);
// }

// let confirmation = confirm("Do you want to delete your note?");
// if (confirmation) {
//   localStorage.removeItem("note");
//   alert("note successfully deleted!");
// }

fetch("https://codeforces.com/api/contest.list?gym=false")
  .then((response) => response.json())
  .then((data) => {
    const upcomingContests = data.result.filter(
      (contest) => contest.phase === "BEFORE"
    );
    console.log("Upcoming Contests:", upcomingContests);
  })
  .catch((error) => console.error("Error:", error));
