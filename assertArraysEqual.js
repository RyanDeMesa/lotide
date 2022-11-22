const eqArrays = require("./eqArrays");

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    return `✅✅✅ Assertion Passed: actual === expected`;
  }
  return `🛑🛑🛑 Assertion Failed: actual !== expected`;
  
};


module.exports = assertArraysEqual;


