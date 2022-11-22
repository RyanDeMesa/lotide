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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  if (eqObjects(object1, object2) === true) {
      return `✅✅✅ Assertion Passed: actual === expected`;
    }
    return `🛑🛑🛑 Assertion Failed: actual !== expected`;
    
  };

console.log(assertObjectsEqual({hi: 1}, {hi: 1}));
console.log(assertObjectsEqual({hi: 1}, {hi: 2}));
module.exports = assertObjectsEqual;