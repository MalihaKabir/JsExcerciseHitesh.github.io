// // node Practice.js

// Assignment Practice
const newTodos = [{
  title: 'Buy Bread',
  isDone: false,
}, {
  title: 'Go to Gym',
  isDone: true,
}, {
  title: 'Record YouTube Videos',
  isDone: true,
}]


const findTodos = function (myTodos, title) {
  const titleReturn = myTodos.find(function (todo, index) {
    return todo.title.toLowerCase() === title.toLowerCase()
  })
  return titleReturn
}

let printMe = findTodos(newTodos, 'go To gYm')
console.log(printMe.title);
