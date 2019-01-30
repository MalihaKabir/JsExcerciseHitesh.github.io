// node marvelsArrays.js

const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

// numbers[2] = 'Something'  // to replace.
//
// console.log(numbers);


// Start (Shift/Unshift Method):

// numbers.shift()
//
// console.log("The shifted/deleted number is: " +  numbers.shift());
//
// console.log(numbers);

// numbers.unshift('Something')
//
// console.log(numbers);


// // End (pop/push method):
// numbers.pop()  //to pop up only.
// console.log(numbers);

// console.log(numbers.pop()); //to popped up AND to mention that which element is popping up.

// console.log("The element to be deleted is: " + numbers.pop());
// console.log(numbers); //follow this method.
//
// numbers.push('Seven')
// console.log(numbers);


// Middle (from our choice/place, to replace multiple elements):
numbers.splice(1, 2, 'Something') // numbers.splice(starting position, elements number/s to be deleted, 'You want to replace element/s by THIS')
console.log(numbers);
