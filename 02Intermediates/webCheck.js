// node webCheck.js

let userEmail = ' abc123lco  '
let password = '1234@!abc123lco'

// console.log(password.length);
// console.log(userEmail.toLowerCase());
// console.log(userEmail.toUpperCase());
// console.log(userEmail.trim());

let userChecker = function(myString) {
  if ((myString.includes(123)) && (myString.length > 6)) {
    return true
  }
  return false
}

let passChecker = function(pass) {
  if ((pass.includes('123@!')) && (pass.length > 8)) {
    return true;
  }
  return false
}

console.log(userChecker(userEmail));
console.log(passChecker(password));
