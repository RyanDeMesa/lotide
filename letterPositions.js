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

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};

// test
console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("hello"));
assertArraysEqual(eqArrays(letterPositions("hello").e, [1]));

module.exports = letterPositions;