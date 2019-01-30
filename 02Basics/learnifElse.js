// node learnifElse.js

// Tasks from class:
// if (false) {
//   console.log("I am inside if code block.");
//   console.log("I am still inside.");
// } else if (false) {
//   console.log("I am inside IF IN CAPS BLOCK.");
// } else {
//   console.log("NOTICE THIS VERY CAREFULLY!");
// }


//LCO
//
// var whoIsHere = "teacher"
//
// if (whoIsHere === "user") {
//   console.log("Greeting message for user");
//   console.log("Allow access to all view courses");
// } else if (whoIsHere === "teacher") {
//   console.log("Greeting message for Teacher");
//   console.log("Allow access to view his courses");
// } else {
//   console.log("MESSAGE: please verify your email");
//   console.log("send user an email for verification");
// }


// Assignment:
//Grade problem
// students marks :
//
// 10 - Amazing
// 5  - Good
// 3  - poor
// 0  -fail

var studentMark = 10

if (studentMark === 10) {
  console.log("Amazing grade!Keep it up.");
  console.log("Surely promoted");
} else if (studentMark === 5) {
  console.log("You have a good mark. Keep going and work harder for the best.");
  console.log("Yes, promoted.");
} else if (studentMark === 3) {
  console.log("Poor mark. Work hard!");
  console.log("Promoted with consideration.");
} else if (studentMark === 0) {
  console.log("Unfortunately you have failed. Work hard for the next time.");
  console.log("NOT PROMOTED");
} else {
  console.log("Wrong marking. Marking number should be 10, 05, 03 or 0 only.");
}
