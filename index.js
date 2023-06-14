// function monday() {
//   console.log("Go for a five-mile run");
//   console.log("Pump iron");
// }

// function runFiveMiles() {
//   console.log("Go for a five-mile run");
// }

// function liftWeights() {
//   console.log("Pump up");
// }

// function exerciseRoutine(postRunActivity) {
//   runFiveMiles();
//   postRunActivity();
// }

// function monday() {
//   exerciseRoutine(liftWeights);
// }

// console.log(monday());

function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function callback() {
    console.log("Hello Mr Daniel.");
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("Hello, World");
  };
}
