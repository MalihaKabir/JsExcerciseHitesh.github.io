// node kingProb.js

//Kings' Territory Problem: (CONTINUATION OF SCOPE.JS)

let king = "Maharaja" //King of the whole territory. He has two kids - 'Rajkumar A' and 'Rajkumar B'.

if (true) {
  let king = "Rajkumar A"

  if (true) {
    let king = "Rajkumar B" // ALWAYS declare ur variables in whichever ways(by 'let'/'var') u want, MUST DECLARE!
    // king = "Rajkumar B" -this will globally be declared.
    console.log(king); // This declaration will follow the nearest king of his territory!
  }
}

if (true) {
  console.log("I am the second part : " + king); // The Global King is ruling here.
}
