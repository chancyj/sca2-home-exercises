// Complete the implementation of the following functions so that
// the output is [0, 3, 6, 9, 12]

const arr = [0, 1, 2, 3, 4];

const triple = (el) => {
  // TODO: Triple the value inputted
  return el * 3;
};

// Challenge: Implement the map method below!
// Array.prototype.map = function(fun) {
//   // this contains the value of the Array
//   const arr = this
//   // TODO: Using the passed in fun, apply to all elements
//   // to array and return the new array
// }

console.log(arr.map(triple));
