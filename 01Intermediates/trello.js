// node trello.js

const colors = ['red', 'orange', 'green', 'yellow', 'blue', 'white']

for (let index = 0; index < colors.length; index++) {
  console.log(`starts with ${index +1} -- ${colors[index]}`);
}

colors.forEach(function (color, index) {
  console.log(`Starts with ${index + 1} -- ${color}`);
})


// ASSIGNMENT:
const todos = ['brush', 'study', 'breakfast', 'againStudy']

todos.forEach(function (todo, index) {
  console.log(`My todo list starts with ${index + 1} -- ${todo}`);
})


// Practice Work:
const fruits = ['MANGO', 'ORANGE', 'APPLE', 'BLACKBERRY']

for (let index = fruits.length - 1; index >= 0; index-- ) {
  console.log(fruits[index]);
}


const days = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri']

for (let positionOfArray = 1; positionOfArray <= days.length-2; positionOfArray = positionOfArray + 1) {
  console.log(days[positionOfArray]);
}
