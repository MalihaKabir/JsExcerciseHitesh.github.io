// node 1stToDoApp.js

// const myTodos = []

myTodos.push('Buy Bread')
myTodos.push('Record videos for YouTube')
myTodos.push('Go to Gym')

// By using forEach loop:
//
// myTodos.forEach(function (todo, index) {
//   console.log(`Your task no. ${index + 1} is : ${todo}`);
// })

// By using for loop:
//
// for (let index = 0; index < myTodos.length; index++){
//   console.log(`Your task no. ${index + 1} is: ${myTodos[index]}`);
// }


// ASSIGNMENT:
const myTodo = ['Learn JavaScript', 'Learn NodeJs']

myTodo.unshift('Learn Bootstrap')
myTodo.unshift('Learn CSS')
myTodo.unshift('Learn HTML')

// by using forEach loop:
// myTodo.forEach(function (todo, index) {
//   console.log(`Your task number ${index + 1} is : ${todo}`);
// })

// by using for loop:
for (var index = 0; index <= myTodo.length - 1 ; index++) {
  console.log(`My task no. ${index + 1} is : ${myTodo[index]}`);
}
