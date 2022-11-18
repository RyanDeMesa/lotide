const takeUntil = function (array, callback) {
  array.map((variable, index) => {
    // loops through
    if (callback(variable)) {
      // plugs in current variable to callback function
      array.splice(index);
      // if callback returns true it takes index out off array
    }
  });
  return array; // returns the modifed array
};

// test
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

// expected output
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
