// complete the implementation of sum and reduce such that reducing an array
// returns the product of its values
// [0,4,3,6,9].fold(sum, 0) === 22

const arr = [0, 1, 2, 3, 4];

// Note: acc stands for accumulator, cur stands for current
const sum = (acc, cur) => {
  return (cur += acc);
};

// // Challenge: Implement the reduce method below!
// Array.prototype.reduce = function(fun, initValue) {
//   // this contains the value of the Array
//   const arr = this
//   // TODO: Using the passed in fun, apply to all elements
//   // to array and return a singular value
// }

const total = arr.reduce(sum, 0);
console.log(total);
console.log([0, 4, 3, 6, 9].reduce(sum, 0) === 22);
