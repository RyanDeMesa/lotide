const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: actual === expected`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: actual !== expected`);
  }
};

function eqArrays(arr1, arr2) {
  // checks if the arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  // loops through the array
  for (let i = 0; i < arr1.length; i++) {
    // compare current value of arr1 to current value arr2
    if (arr1[i] === arr2[i]) {
      // if values are the same return true
      return true;
      // else return false
    } else {
      return false;
    }
  }
}

const names = ["ryan", "natasha", "milo", "bear"];
const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4];

// function that takes an array and a callback funciton
//return result of callback

const map = function (array, callback) {
  const results = [];
  for (let items of array) {
    results.push(callback(items));
  }

  return results;
};
const results1 = map(words, (word) => word[0]);
console.log(results1);

const results2 = map(names, (lengthOfName) => lengthOfName.length);
console.log(results2);

const results3 = map(numbers, (square) => square * 2);
console.log(results3);


module.exports = map;