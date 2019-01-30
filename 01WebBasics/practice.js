alert('practice')

// track input form
document.querySelector('#myForm').addEventListener('input', (event) => {
  console.log(event.target.value);
})
