alert("Enter the value of a!");

let a = prompt("Enter a here", "578"); //second parameter is the default val
a = Number.parseInt(a); //to covert into integer

alert("You entered a of type " + typeof a);

let write = confirm("Do you want to write it to the page"); //if user says OK it returns true if CANCEL then false

if (write) {
  document.write(a);
} else {
  document.write("Please allow me to write");
};

//Disadvantages:
// 1)dont know from where it will pop up on the screen
// 2)can't be modified/designed so gives outdated look 
// 3)pause the script execution util unless dismissed 