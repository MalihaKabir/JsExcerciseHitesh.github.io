// node arrow.js

// Class Work:

// const sayHello = function (name) {
//   return "Hey there, " + name + " !";
// }
//
// console.log(sayHello('Sammy'));


// // Convert it into ARROW function:
//
// const sayHello = (name) => `Hey there, ${name} !`;
//
// console.log(sayHello('Sammy'));


// const todos = [{
//   title: 'Buy Bread',
//   isDone: true,
// }, {
//   title: 'Go to Gym',
//   isDone: true,
// }, {
//   title: 'Write Code',
//   isDone: false,
// }]
//
// const thingsDone = todos.filter((todo) => todo.isDone === true)
// console.log(thingsDone);

// ASSIGNMENT:
const yesterdaysTodos = [{
  title: 'Js',
  notDone: false,
}, {
  title: 'GD',
  notDone: true,
}, {
  title: 'Typing',
  notDone: false,
}, {
  title: 'Guitar',
  notDone: false,
}, {
  title: 'Q',
  notDone: true,
}, {
  title: 'Listening her work reviews',
  notDone: true,
}]

// yesterdaysTodos.forEach((title) => console.log(title.title))

const notDoneTodos = yesterdaysTodos.filter ((myTodo) => myTodo.notDone === true)
notDoneTodos.filter((obj) => console.log(obj.title))
// OR
// notDoneTodos.forEach((obj) => console.log(obj.title))

// but NOT this below one on line no. 62 & 63. Don't declare it by 'var' or 'const' at all. Directly do the arrow function:
// const mainTitle = notDoneTodos.filter((title) => title.title)
// console.log(mainTitle);


// MUST CHECK OUT THE BELOW SIMPLE EXAMPLE AS WELL but follow the above one:
const todos = [{
  title: 'Learn HTML',
  notDone: false,
}, {
  title: 'Learn CSS',
  notDone: false,
}, {
  title: 'Learn Bootstrap',
  notDone: false,
},{
  title: 'Learn jQuery',
  notDone: true,
},{
  title: 'Learn JavaScript',
  notDone: true,
}]

const thingsNotDone = todos.filter((todo) => {
  return todo.notDone === true})

  // console.log(thingsNotDone);
 thingsNotDone.filter((obj) => {
    console.log(obj.title);})

// N.B.: Here, in line no.84, in 'todos.filter()', 'todos' must be the exact name of your array's name. You can almost say that 'forEach() == filter()' bcz it works in the same way.


// const thingsNotDone = todos.filter((todo) => {
//   return todo.notDone === true})
//
//   // console.log(thingsNotDone);
//  thingsNotDone.filter((obj) => {
//     console.log(obj.title);})
