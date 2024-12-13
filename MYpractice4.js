// getting password from the user
let password = prompt("Enter your password:");

// // // lets verify the password
// const passwordValidation=(password)=>{
//  if (password.length<8) {
//    return false;
//  }
// //  creating regex patterns nd storing them in variables
//  let hasDigit = /\d/;
//  let hasUpperCaseLetter = /[A-Z]/;
//  let hasSpecialChar = /[!@#$%^&*]/;
// //  checking in acc w the regex pattern that whether it is available in password or not
//  return hasDigit.test(password) && hasUpperCaseLetter.test(password) && hasSpecialChar.test(password);
// };
// passwordValidation(password);

// or, it can be done as:

// const passwordValidation=(password)=>{
//   if (password.length<8) {
//    console.error("Your password must contain 8 characters. TRY AGAIN");
//   };

//   let hasDigit = /\d/;
//   let hasUpperCaseLetter = /[A-Z]/;
//   let hasSpecialChar = /[!@#$%^&*]/;

//   if (!hasDigit.test(password)) {
//     console.error("Your password must contain a digit");
//   }
//   if (!hasUpperCaseLetter.test(password)) {
//     console.error("Your password must contain an upper case");
//   }
//   if (!hasSpecialChar.test(password)) {
//     console.error("Your password must contain a special character");
//   }
// };

// passwordValidation(password);

//or by using callbacks concept
function passwordValidation(password, callback) {
  let hasDigit = /\d/;
  let hasUpperCaseLetter = /[A-Z]/;
  let hasSpecialChar = /[!@#$%^&*]/;

  if (password.length < 8) {
    callback(invalid);
  }
  if (!hasDigit.test(password)) {
    callback(invalid);
  }
  if (!hasUpperCaseLetter.test(password)) {
    callback(invalid);
  }
  if (!hasSpecialChar.test(password)) {
    callback(invalid);
  }
}

function validCheck(invalid, valid) {
  if (invalid) {
    console.error("Invalid Password");
    return;
  }
  confirm("You entered a valid password. Proceed further?");
}

passwordValidation(password, validCheck);
