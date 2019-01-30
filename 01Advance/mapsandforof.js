// node mapsandforof.js

var john = {
  name: 'I am John',
  age: 24,
  isActive: true,
}

var marry = {
  name: 'I am Marry',
  age: 23,
  isActive: true,
}

var sam = {
  name: 'I am Sam',
  age: 27,
  isActive: false,
}

let users = new Map()

users.set('john', john)
users.set('marry', marry)
users.set('sam', sam)

console.log(users);

console.log(users.size);

console.log(users.get('john'));

console.log(users.keys());

console.log(users.values());


// notes:
// iterator  ==  variable.
// iterable  ==  object.
// IterableIterator === Object's variable.
// iterate = perform or utter repeatedly; or loop through; or make repeated use of a mathematical or computational procedure.

// for example, you can say that:
// for (iterator of object) { } === for (variable of iterable) { }



for (const key of users.keys()) {
  console.log(key);
}
// or you can write it without 'const':
for (key of users.keys()) {
  console.log(key);
}



for (const value of users.values()) {
  console.log(value);
}
// or
for (value of users.values()) {
  console.log(value);
}


for (value of users.values()) {
  console.log(value.name);
}


for (const [key, value] of users.entries()) {
  console.log(key + ' = ' + value.name);
}


// Converting the above log in literals or string-literals or in back ticks(``):
for (const [key, value] of users.entries()) {
  console.log(`${key} = ${value.isActive}`);
}


users.forEach((value, key) => console.log(`${key} = ${value.age}`))



// Another one:
var arrofArr = [['one', '1'], ['two', '2'], ['three', '3']]

var newMap = new Map(arrofArr)

console.log(newMap);

// assignment:
for (key of newMap.keys()) {
  console.log(`${key} = ${newMap.get(key)}`);
}



// node mapsandforof.js
