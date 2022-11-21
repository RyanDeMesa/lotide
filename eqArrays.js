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

module.exports = eqArrays;


