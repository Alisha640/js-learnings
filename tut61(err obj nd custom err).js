// err obj: has two commmon properties for build in errors; err.name / err.message / err.stack(combo of both)
// custom errors; are ur own errors that u wanna generate anywhere u want

// try {
//   hello; //undefined var
// } catch (error) {
//   console.log(error.name); //tells the name of err
//   console.log(error.message); //wot the err says
//   console.log(error.stack); //both together
// }

// lets create custom errors
try {
  let age = prompt("Enter your age;");
  age = Number.parseInt(age);
  if (age > 150) {
    throw new Error("Invalid Age");
  }
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}
console.log(
  "As the err is caught, rest of the script will be loaded... nd suppose i am that src rn;"
);
