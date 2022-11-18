function eqArrays(arr1, arr2) {
  // loop through arr1
  for (let i = 0; i < arr1.length; i++) {
    // loop through arr2
    for (let x = 0; x < arr2.length; x++) {
      // compare current value of arr1 to current value arr2
      if (arr1[i] === arr2[x]) {
        // if values are the same return true
        return true;
        // else return false
      } else {
        return false;
      }
    }
  }
}

const assertArraysEqual = function(arr1, arr2){
  for (let i = 0; i < arr1.length; i++) {
    // loop through arr2
    for (let x = 0; x < arr2.length; x++) {
      // compare current value of arr1 to current value arr2
      if (arr1[i] === arr2[x]) {
        return `✅✅✅ Assertion Passed: actual === expected`;
      } else {
        return `🛑🛑🛑 Assertion Failed: actual !== expected`;
      }
    }
  }
}

console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
