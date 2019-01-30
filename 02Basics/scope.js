// node scope.js

let iAmGlobal = "Here I am globally declared."

if (true) {
  let iAmLocal = "This is a local place and I'm declard locally because I'm in this code block '{}'."
  iAmGlobal = "I WILL REMAIN GLOBAL!"
  var iAmGlobalVariable = "Though this place is called Local place, yet I'm declard Globally, whether inside this code block or outside, doesn't matter, because I'm declared by 'var'."
  console.log(iAmGlobal);
  console.log(iAmLocal);
}

// console.log(iAmLocal);
// You'll find an Error bcz this is a local variable and it is declared with 'let'.

console.log(iAmGlobalVariable);
// If you use 'var', it'll globally declare the variable.

console.log(iAmGlobal);

//USE 'LET' VARIABLE ALWAYS INSTEAD OF 'VAR', UNLESS YOU WANT IT TO BE DECLARED GLOBALLY!!!
