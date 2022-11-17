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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  for (const key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    }
    if (object2[key] !== object1[key]) {
      return false;
    }
  }
  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

// test code
console.log(eqObjects(cd, dc)); // true
console.log(eqObjects(cd, cd2)); // false
console.log(eqObjects(ab, ba)); // => true
console.log(eqObjects(ab, abc)); // => false

// assertEqual(ab, abc);
// assertEqual(ab, ba);
assertEqual(eqObjects(cd, dc), true); // => true
assertEqual(eqObjects(cd, cd2), false); // => false
