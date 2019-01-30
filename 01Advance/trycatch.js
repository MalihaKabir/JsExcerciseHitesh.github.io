// node trycatch.js

const convertToRs = (dollar) => {
  if (typeof dollar === 'number') {
    return dollar * 64
  } else {
    throw Error('Amount needs to be a number')
  }
}

// // DO NOT use these below two lines. Always try and catch the error. Otherwise your program may crash!
// const myValue = convertToRs('five')
// console.log(myValue);


try {
  const myValue = convertToRs('five')
  console.log(myValue);
} catch (error) {
  console.log(error);
}

console.log('I will not run if program crashes');



// // practice for own:
// const finalScore = (score, bonus) => {
//   if (typeof (score && bonus) === 'number') {
//     return (score + bonus) * 2
//   } else {
//     throw Error ('Amount needs to be number')
//   }
// }
//
// // const theScore = finalScore(2, 3)
// // console.log(theScore);
//
// try {
//   const theScore = finalScore('two', 3)
//   console.log(theScore);
// } catch (e) {
//   console.log(error);
// }
//
// console.log('I will not run if program crashes');
