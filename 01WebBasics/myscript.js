alert('myscript')
// DOM: How you're structuring your web elements, that's your Document Object Model or DOM.
// document.title = 'I got changed'

// console.log(document.getElementById('idOne'));


// const myDocument = document.querySelectorAll('#idOne')
// console.log(myDocument[0]);


// // to change textContent of any tag:
// const myPElements = document.querySelector('p')
// myPElements.textContent = 'I am being changed using Js.'


const myPElements = document.querySelectorAll('p')
myPElements.forEach(function (p) {
  p.textContent = 'I am being changed using Js.'
})

// // arrow function(assignment):
// const myPElements = document.querySelectorAll('p')
// myPElements.forEach((p) => p.textContent = 'I am being changed using Js.')


// add a new tag element or element:
const newPara = document.createElement('p')
newPara.textContent = 'I was added in this team via Js.'

document.querySelector('body').appendChild(newPara)


// EVENTS:
document.querySelector('button').addEventListener('click', () => {
  console.log('Button was pressed!');
})


// document.querySelector('button').addEventListener('click', (event) => {
//   console.log(event);
// })


document.querySelector('button').addEventListener('click', (event) => {
  event.target.textContent = 'I was clicked'
})


// track input form:
document.querySelector('#myForm').addEventListener('input', (event) => {
  console.log(event.target.value);
})


// my practice: (to add a heading/or any tag on top)
const newHeading = document.createElement('h2')
newHeading.textContent = 'This is heading two added via JS'

document.querySelector('body').prepend(newHeading)
