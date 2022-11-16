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

function assertArraysEqual(boolean) {
  if (boolean === true) {
    console.log("These arrays are the same!");
  } else {
    console.log("These arrays are not the same!");
  }
}

function middle(array) {
  let middleValue = [];
  let middleIndex = 0;
  if (array.length > 2) {
    // console.log(array.slice(1, array.length - 1));
    if (array.length % 2 === 0) {
      // array is even
      middleIndex = array.length / 2;
      middleValue.push(array[middleIndex - 1], array[middleIndex]);
      return middleValue;
    }
    // array is odd
    middleIndex = Math.floor(array.length / 2);
    middleValue.push(array[middleIndex]);
    return middleValue;
  } else {
    return [];
  }
}

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4, 5, 6])); //=> [4, 5]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2, 3, 4, 5, 6, 7])); // => [4]
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8])); // => [4, 5]
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // => [5, 6]
