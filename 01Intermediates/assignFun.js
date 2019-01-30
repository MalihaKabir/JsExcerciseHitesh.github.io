// node assignFun.js

// Class Work:

// let getMyGrade = function (currentMarks, totalMarks) {
//   let myPercent = (currentMarks/totalMarks) * 100
//
//   let myGrade = ''
//
//   if (myPercent >= 90) {
//     myGrade = 'A'
//   } else if (myPercent >= 80) {
//     myGrade = 'B'
//   } else if (myPercent >= 70) {
//     myGrade = 'C'
//   } else {
//     myGrade = 'F'
//   }
//
//   return `Your grade is ${myGrade} and percentage is ${myPercent}`;
//
// }
//
// let yourResult = getMyGrade (92, 150)
// console.log(yourResult);



// // PRACTICE:
// let getMyGrade = function (myMark, totalMarks) {
//   let myPercent = (myMark/totalMarks) * 100
//
//   let myGrade = ''
//
//   if (myPercent >= 90) {
//     myGrade = 'A'
//   } else if (myPercent >= 80) {
//     myGrade = 'B'
//   } else if (myPercent >= 70) {
//     myGrade = 'C'
//   } else if (myPercent >= 60) {
//     myGrade = 'D'
//   } else if (myPercent >= 50) {
//     myGrade = 'E'
//   } else {
//     myGrade = 'F'
//   }
//
//   return `My grade is ${myGrade} and percentage is ${myPercent}`
//
// }
//
// let yourResult = getMyGrade(60, 80)
//
// console.log(yourResult);



// ASSIGNMENT: Create this function in such way that only and only numbers can be passed on.
let getMyGrade = function (myMark , totalMark) {
  myPercentage = (myMark/totalMark) * 100

  let myGrade = ''

  if (myPercentage >= 92 && myPercentage <= 100) {
    myGrade = 'A'
  }else if (myPercentage >= 80) {
    myGrade = 'B'
  }else if (myPercentage >= 70) {
    myGrade = 'C'
  }else if (myPercentage >= 60) {
    myGrade = 'D'
  }else if (myPercentage < 60 && myPercentage >= 0) {
    myGrade = 'F'
  }else {
    return 'Hey! You only need to pass on integers/numbers here.'
  }

  return `My grade is ${myGrade} and I've got ${myPercentage}%.`
}

let myResult = getMyGrade('abc', 100)
console.log(myResult);


// // Assignment:
// let getMyGrade = function (myMark , totalMark) {
//   myPercentage = (myMark/totalMark) * 100
//
//   let myGrade = ''
//
//   if (myPercentage >= 92 && myPercentage <= 100) {
//     myGrade = 'A'
//   }else if (myPercentage >= 80) {
//     myGrade = 'B'
//   }else if (myPercentage >= 70) {
//     myGrade = 'C'
//   }else if (myPercentage >= 60) {
//     myGrade = 'D'
//   }else if (myPercentage < 60 && myPercentage >= 0) {
//     myGrade = 'F'
//   }else {
//     return 'Hey! You only need to pass integers here.'
//   }
//
//   return `My grade is ${myGrade} and percentage is ${myPercentage}`
// }
//
// let myResult = getMyGrade('abc', 100)
// console.log(myResult);
