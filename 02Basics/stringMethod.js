// node stringMethod.js

// from freeCodeCampYouTube channel: (20 String Methods in 7 Minutes)
// 20 STRING METHODS :
let stringOne = 'freeCodeCamp is good enough to follow '
let stringTwo = 'for frontend and backend development'

// charAt(index)
console.log(stringOne.charAt(1));

// charCodeAt() [couldn't understand]

// concat() ['concat' join two or more string and and returns a new join string.]
console.log(stringOne.concat(stringTwo));

// endsWith(element, position) ['endsWith' checks whether a string ends with a specified string or characters. It will return true or false only.]
console.log(stringOne.endsWith('follow'));
console.log(stringTwo.endsWith('backend', 25));
console.log(stringTwo.endsWith('development', 37));
console.log(stringTwo.endsWith('backend'));

// fromCharCode() [couldn't understand]

// includes(element, position)
console.log(stringTwo.includes('end'));
console.log(stringTwo.includes('End')); // as Js is case sensetive.

// indexOf('string') [it will show the starting index position of the element/string.]
console.log(stringTwo.indexOf('for'));
console.log(stringTwo.indexOf('and'));
console.log(stringTwo.indexOf('frontend'));

// lastIndexOf() [if some elements are same]
console.log(stringTwo.lastIndexOf('end'));

// match() [it will render those elements which are same in this array]
console.log(stringTwo.match(/end/g));

// repeat(integer)
console.log(stringOne.repeat(3));

// replace(regExp, 'replacedBy')
console.log(stringTwo.replace(/end/g, 'END'));

// search()
