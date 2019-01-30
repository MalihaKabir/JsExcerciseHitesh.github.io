// node trellov4.js

// const myTodo = ['Buy Bread', 'Go to Gym', 'Do YouTube Videos']
//
// console.log(myTodo.indexOf('Buy Bread')); //to see the index number.
// console.log(myTodo[myTodo.indexOf('Do YouTube Videos')]); //to see the element of that index.
//
// //make sure u write in an exact way bcz every element is case sentitive; and it will return as well as print -1 as a negative value. So keep it in your mind. For more, check the below example:
// console.log(myTodo.indexOf('buy Bread'));


const newTodos = [{
  title: 'Graphic Designing',
  isDone: true,
}, {
  title: 'Web Designing',
  isDone: true,
}, {
  title: 'JavaScript',
  isDone: false,
}]

// const index = newTodos.findIndex(function (todo, index) {
//   // console.log(todo);
//
//   return todo.title === 'Web Designing';
// })
//
// console.log(index);


// Method 1:
const findTodo = function (myTodos, title) {
  const index = myTodos.findIndex(function(todo, index) {
    return todo.title.toLowerCase() === title.toLowerCase()
  })
  return myTodos[index];
}

let printMe = findTodo(newTodos, 'Javascript')

console.log(printMe);
// // assignment
// console.log(printMe.title);


// // Method 2:
// const findTodo = function (myTodos, title) {
//   const titleReturned = myTodos.find(function(todo, index) {
//     return todo.title.toLowerCase() === title.toLowerCase();
//   })
//   return titleReturned;
// }
//
// let printMe = findTodo(newTodos, 'JavascripT')
// console.log(printMe);


// // Assignment:
// const newTodos = [{
//   title: 'Buy Bread',
//   isDone: false,
// }, {
//   title: 'Go to Gym',
//   isDone: true,
// }, {
//   title: 'Record YouTube Videos',
//   isDone: true,
// }]
//
// const findTodos = function (myTodos, title) {
//   const titleReturned = myTodos.find(function (todo, index) {
//     return todo.title.toLowerCase() === title.toLowerCase();
//   })
//   return titleReturned;
// }
//
// let printMe = findTodos(newTodos, 'go To gYm')
// console.log(printMe.title);
