// node trellov2.js

// ClassWork:
// let myTodos = {
//   day: 'Monday',
//   meetingsIhave: 0,
//   meetDone: 0,
// }
//
// let addMeetings = function (todo, addNewMeet = 0) {
//   todo.meetingsIhave = todo.meetingsIhave + addNewMeet
// }
//
// let meetDone = function (todo, meetingsDone = 0) {
//   todo.meetDone = todo.meetDone - meetingsDone
// }
//
// let resetTheDay = function (todo) {
//   todo.meetingsIhave = 0
//   todo.meetDone = 0
// }
//
// let getSummeryOfTheDay = function (todo) {
//   let meetLeft = todo.meetingsIhave + todo.meetDone
//   return `You have ${meetLeft} meeting left today.`
// }
//
// // // FOLLOW THE BELOW PROCESS, THE PROPER ONE which is commented here !!
// //
// // let getSummeryOfTheDay = function (todo) {
// //   let meetLeft = todo.meetingsIhave + todo.meetDone
// //
// //   if (meetLeft <= 1) {
// //     return `You have ${meetLeft} meeting left today.`
// //   } else {
// //     return `You have ${meetLeft} meetings left today.`
// //   }
// //
// // }
//
//
// addMeetings(myTodos, 4)
// addMeetings(myTodos, 2)
//
// meetDone(myTodos, 5)
//
// // console.log(myTodos);
// console.log(getSummeryOfTheDay(myTodos));


// node trellov2.js
// My Modification:
let myTodos = {
  day: 'Monday',
  meetingsIhave: 0,
  meetDone: 0,
}

let addMeetings = function (todo, addNewMeet = 0) {
  todo.meetingsIhave = todo.meetingsIhave + addNewMeet
}

let meetDone = function (todo, meetingsDone = 0) {
  todo.meetDone = todo.meetDone + meetingsDone
}

let resetTheDay = function (todo) {
  todo.meetingsIhave = 0
  todo.meetDone = 0
}

let meetLeft = function (todo) {
  return todo.meetLeft = todo.meetingsIhave - todo.meetDone
}

let getSummeryOfTheDay = function (todo) {
  if (todo.meetLeft <= 1) {
    return `You have ${todo.meetLeft} meeting left today.`
  } else {
    return `You have ${todo.meetLeft} meetings left today.`
  }

}


addMeetings(myTodos, 4)
addMeetings(myTodos, 6)

meetDone(myTodos, 9)
meetLeft(myTodos)

// console.log(myTodos);
console.log(getSummeryOfTheDay(myTodos));
