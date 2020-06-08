const assert = require("assert");
const number = require("number-to-words");

// Feel free to look things up online!

const reverse = function (str) {
  // TODO - write a function which reverses the string
  return str.split("").reverse().join("");
};

const factorial = function (num) {
  // TODO - write a function which returns the factorial of a positive integer
  // For example, 5! = 5 * 4 * 3 * 2 * 1 = 120
  if (num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

const announceDate = function () {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
  const today = new Date();
  const month = today.getMonth();
  const date = today.getDate();
  const year = today.getFullYear();
  const hour = today.getHours();
  const min = today.getMinutes();
  const state = hour > 12 ? "afternoon" : "morning";

  const nth = function (d) {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  console.log(
    `Today's date is ${months[month]} ${date}${nth(
      date
    )}, ${year}. It is ${number.toWords(hour % 12)} ${number.toWords(
      min
    )} in the ${state}.`
  );
};

const shiftRight = function (str, num) {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"

  new_str = Array(str.length);
  for (let i = 0; i < str.length; i++) {
    new_str[(i + num) % str.length] = str[i];
  }

  console.log(new_str.join(""));
  return new_str.join("");
};

const tokenize = function (str) {
  // TODO - write a function which converts a multi-word string into an array of words
  return str.split(" ");
};

const uniqueOnes = function (ary) {
  // TODO - write a function which returns the inputted array without duplicate elements
  const newSet = new Set(ary);
  console.log([...newSet]);
  return [...newSet];
};

const zip = function (arr1, arr2) {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  if (arr1.length != arr2.length) {
    return -1;
  }

  let arr = [];

  for (let i = 0; i < arr1.length; i++) {
    arr.push([arr1[i], arr2[i]]);
  }

  console.log(arr);
  return arr;
};

const unzip = function (arr) {
  // TODO - Write a function which does the opposite of `zip()`
  arr1 = [];
  arr2 = [];

  for (each of arr) {
    arr1.push(each[0]);
    arr2.push(each[1]);
  }

  console.log(arr1, arr2);
  return arr1, arr2;
};

// Write tests here:

assert(1 < 2);
assert(1 + 2 == 3);
assert([2, 3][0] === 2);
assert(reverse("3df") === "fd3");
assert(factorial(5) === 120);
const x = tokenize("This is several words!");
// assert(x === ["This", "is", "several", "words!"]);

console.log(tokenize("This is several words!"));
console.log(typeof ["This", "is", "several", "words!"]);

announceDate();
shiftRight("Hello", 3);
uniqueOnes([1, 1, 1, 1, 2, 3]);
zip([1, 2, 3], [5, 3, 1]);
unzip(zip([1, 2, 3], [5, 3, 1]));
