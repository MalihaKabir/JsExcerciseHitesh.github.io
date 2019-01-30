// node marvels.js

//datatype - Array:
const superheroes = ['Iron Man', 'Spiderman', 'Capt. America', 'Thor']

console.log(superheroes);
console.log(superheroes[0]); // if u want to access in a member. zero = position.
console.log(superheroes[2]);
console.log(superheroes.length); //to calculate(human readable) the number of the values which is 3.
console.log(superheroes[superheroes.length - 1]); //then it'll substract 1 from it.
// like 3-1 = 2. Which means it is going to give u the access to enter the last member(Capt. America) of the array.

console.log(superheroes[superheroes.length - 1]); // So, the last value is gonna be 1 less. Finally we r calling the 'superheroes' which is the name of our array and getting that last value!

//Declare the length of the array:
console.log(`We have ${superheroes.length} superheroes.`);

console.log(`We have ${superheroes[superheroes.length - 1]} as our last superhero.`);
