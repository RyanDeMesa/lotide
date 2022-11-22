const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


console.log(middle([1, 2, 3, 4, 5, 6]))

console.log(assertArraysEqual(middle([1, 2, 3]), [2])) //=> return true
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])); // => return true
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); //=> return true
