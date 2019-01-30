// node coercion.js

console.log('5' + 5);
const giveType = typeof {}

console.log(giveType);


// here, "true = 1"; always remember that!
const adderOne = true + 5
console.log(adderOne);
// or
const adderTwo = false + 5  // here, "false = 0(zero)"; always remember that!
console.log(adderTwo);

// OR :

const adderThree = 10 + true
console.log(adderThree);
// or
const adderFour = 10 + false
console.log(adderFour);



// NEXT Exmpl of COERCION:

const loginDetails = []
// logic for getting details from DB.

const loginID = loginDetails[0]

if (loginID !== undefined) {
  console.log('Allow user to login');
} else {
  console.log('Auth failed');
}
// It will render 'Auth failed' because as we are declaring that loginID = loginDetails[0], which means loginID is in the position number zero in 'loginDetails' array. And when we go to the 'loginDetails' array to find the element which is in zero position, we discover that there is no element in zero position and which means it is 'undefined'. In fact, there is no element in the array named loginDetails. Hence, it'll render Auth failed.


// // or
// if (loginID) {
//   console.log('Allow user to login');
// } else {
//   console.log('Auth failed');
// }

// Which means if there is any loginID, it'll give you the access otherwise will just render 'Auth failed'.


// // VALUES that interpret as or considered as 'false':
// 1. false
// 2. 0
// 3. ''
// 4. null
// 5. undefined.

// apart from that everything is just considered as 'true'.
