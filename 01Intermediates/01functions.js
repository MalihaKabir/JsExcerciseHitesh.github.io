// node 01functions

let sayHello = function (name) {
  console.log(`Greeting message for ${name}`);
  console.log(`Hey ${name}`);
}

// sayHello("John")


let fullNameMaker = function (firstname, lastname) {
  console.log("Welcome to LCO");
  console.log(`Happy to have you, ${firstname} ${lastname}`);
}

// fullNameMaker("John", "Doe")


let myAdder = function (num1, num2) {
  let added = num1 + num2
  return added
}

// myAdder(2, 4)
console.log(myAdder(2, 4)); //right way to call a functon for this kind small project.
// or
let result = myAdder(2, 5)
console.log(result);
// both way is correct to call the function but choose the first one.



// Practice:
let myAddedNum = function (number1, number2) {
  let addedNum = number1 + number2
  return addedNum
}

console.log(myAddedNum(4, 4));
