// node trello2.js

// Class Work:
//
// const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
//
// console.log(days[1]);
//
// days.forEach(function (day, index) {
//   console.log(`Week starts with -- ${day} which is day ${index + 1}`);
// })

// Always and always remember one thing here is : Whatever the 1st element (day) is gonna be, it's gonna be THE ELEMENT ITSELF IN THE ARRAY. Remember that!!
// AND the 2nd parameter/element (index) of the function is gonna be the index value(like, 0 1 2 . . . 7) of the Array.


// // ASSIGNMENT 1:
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
//
// months.forEach(function (month, index) {
//   console.log(`Month ${index + 1} is - ${month}`);
// })


// ASSIGNMENT 2: (todo list - loop through by forEach loop)
const todoList = ["Wake up at 5 o'clock in the morning", "Take JavaScript course till 12pm", "Do the rest of your work after that"]

todoList.forEach(function (todo, index) {
  console.log(`My work number ${index + 1} of the day is ${todo}`);
})
