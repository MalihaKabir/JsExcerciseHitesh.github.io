// node trellov3.js

// CLASS WORK:

let myTodos = {
  day: 'Tuesday',
  meetings: 0,
  meetDone: 0,

  addMeeting: function (num) {
    this.meetings = this.meetings + num
    },

  summary: function () {
    return `You have ${this.meetings} meetings today.`;
  }
}


myTodos.addMeeting(4)

console.log(myTodos.summary());


// // ASSIGNMENT:
// // (Handle meeting done
// // Create a fn that can reset entire day
// // And of course, get the summary from it.)
//
//
// let meetingTodo = {
//   day: 'Thursday',
//   meetingsIhave: 0,
//   meetingsDone: 0,
//
//   addNewMeeting: function (num) {
//     this.meetingsIhave = this.meetingsIhave + num
//   },
//
//   addMeetingsDone: function (num) {
//     this.meetingsDone = this.meetingsDone + num
//   },
//
//   resetEntireDay: function () {
//     this.meetingsIhave = 0
//     this.meetingsDone = 0
//   },
//
//   summaryOfTheDay: function () {
//     return `You had ${this.meetingsIhave} meetings, you have done ${this.meetingsDone} meetings.`
//   },
//
// }
//
// meetingTodo.addNewMeeting(10)
// meetingTodo.addNewMeeting(2)
// // meetingTodo.resetEntireDay()
// meetingTodo.addMeetingsDone(7)
// console.log(meetingTodo.summaryOfTheDay());


// // DetailedVersion/Modification:
// let meetingTodo = {
//   day: 'Thursday',
//   meetingsIhave: 0,
//   meetingsDone: 0,
//
//   addNewMeeting: function (num) {
//     this.meetingsIhave = this.meetingsIhave + num
//   },
//
//   addMeetingsDone: function (num) {
//     this.meetingsDone = this.meetingsDone + num
//   },
//
//   resetEntireDay: function () {
//     this.meetingsIhave = 0
//     this.meetingsDone = 0
//   },
//
//   meetingLeft: function () {
//     this.meetingLeft = this.meetingsIhave - this.meetingsDone
//   },
//
//   summaryOfTheDay: function () {
//     if (this.meetingLeft <= 1) {
//       return `You have left only ${this.meetingLeft} meeting.`;
//     }
//     return `You had ${this.meetingsIhave} meetings, you have done ${this.meetingsDone} meetings and only ${this.meetingLeft} meetings are left.`
//   },
//
// }
//
// meetingTodo.addNewMeeting(5)
// meetingTodo.addNewMeeting(1)
// // meetingTodo.resetEntireDay()
// meetingTodo.addMeetingsDone(3)
// meetingTodo.addMeetingsDone(1)
// meetingTodo.meetingLeft()
// console.log(meetingTodo.summaryOfTheDay());



// // PRACTICE1:
//
// // myTodos
// // addMeeting
// // meetsDone
// // resetTheDay
// // meetLeft
// // getSummery
//
// let myTodos = {
//   day: 'Tuesday',
//   meetHave: 5,
//   meetDone: 2,
//
//   addNewMeet: function (num) {
//     this.meetHave = this.meetHave + num
//   },
//
//   addMeetDone: function (num) {
//     this.meetDone = this.meetDone + num
//   },
//
//   resetTheDay: function () {
//     this.meetHave = 5
//     this.meetDone = 2
//   },
//
//   meetLeft: function () {
//     this.meetLeft = this.meetHave - this.meetDone
//   },
//
//   summery: function () {
//     return `I have ${this.meetHave} meetings, done ${this.meetDone} and left ${this.meetLeft}. `
//   },
// }
//
// myTodos.addNewMeet(10)
// myTodos.addMeetDone(5)
// myTodos.meetLeft()
// console.log(myTodos.summery());


// // Practice2:
// let myTodos = {
//   days: 'Wednesday',
//   meetings: 15,
//   meetDone: 5,
//
//   addNewMeet: function (num) {
//     this.meetings = this.meetings + num
//   },
//
//   addMeetingsDone: function (num) {
//     this.meetDone = this.meetDone + num
//   },
//
//   resetEntireDay: function () {
//     this.meetings = 0
//     this.meetDone = 0
//   },
//
//   meetingLeft: function () {
//     this.meetingLeft = this.meetings - this.meetDone
//   },
//   getSummery: function () {
//     if (this.meetingLeft <= 1) {
//       return `You have ${this.meetingLeft} meeting left.`
//     } else {
//       return `You have ${this.meetingLeft} meetings left.`
//     }
//   }
// }
//
// myTodos.addNewMeet(5)
// myTodos.addMeetingsDone(13)
// myTodos.meetingLeft()
// console.log(myTodos.getSummery());
