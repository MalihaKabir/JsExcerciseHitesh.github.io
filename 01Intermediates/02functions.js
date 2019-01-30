//node 02functions.js

// let myMultiplier = function (num1, num2) {
//   let multiply = num1 * num2
//   return multiply;
// }
//
// let result = myMultiplier(2, 5)
// console.log(result);
//
// console.log(myMultiplier(2, 3));


// Appropriate way:
let myMultiplier = function(num1, num2) {
  return num1 * num2; // function to reduce the number of line/s of code.
}

console.log(myMultiplier(5, 5));


let guestUser = function(name ='unName', courseCount = 0) {
  return "Hello " + name + "! " + "Your course count is: " + courseCount
}
// function(name ='unName', courseCount = 0), here 'unName' and 0(zero) are default parameters.

console.log(guestUser("John Doe", 2)); // when u put some value in here, like "John Doe" and 2, u take over the default values which are 'unName' and 0 here.


// // Another Example:
//
// let guestUser = function (firstName = 'Dear', lastName = 'User', courseCount = '0') {
//   return 'Hello ' + firstName + ' ' + lastName + ' and your course count is:' + courseCount
// }
// 
// console.log(guestUser());
// console.log(guestUser('John', 'Doe', 5));
