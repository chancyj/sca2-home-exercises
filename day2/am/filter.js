// Complete the implementation below such that all elements of the array
// that are not multiples of 7 are removed

const arr = [7, 8, 15, 14, 13, 70, 44, 35, 88, 77, false, "7", "hi", null];

const multOf7 = (el) => {
  // TODO: Check if el is a multOf7

  if (el % 7 !== 0 && isNaN(el) === false) {
    return el;
  }
};

// Challenge: Implement the filter method below!
// Array.prototype.filter = function(fun) {
// this contains the value of the Array
//   const arr = this
// TODO: Using the passed in fun, apply to all elements
// to array to determine to keep or not
// }

const newArr = arr.filter(multOf7);

console.log(newArr);
