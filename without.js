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

// Different attempt still need to fix
// function without(source, itemsToRemove) {
//   // delcare new array
//   let newArr = [];
//   // loop through first array
//   for (let i = 0; i < source.length; i++) {
//     // loop through second array
//     for (let x = 0; x < itemsToRemove.length; x++) {
//       // compare first current array index to second current array index if !== push to new array
//       if (source[i] !== itemsToRemove[x]) {
//         newArr.push(source[i]);
//         // i++;
//       }
//     }
//   }
//   // return new array
//   return newArr;
// }

function without(source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      newArr.push(source[i]);
    }
  }
  return newArr;
}

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
