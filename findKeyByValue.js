const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: actual === expected`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: actual !== expected`);
  }
};

// const findKeyByValue = function (object, value) {
//   let keysArr = Object.keys(object);

//   for (let genre of keysArr) {
//     if (keysArr[genre] === object[]) {
//       return genre;
//     } else {
//       return undefined;
//     }
//   }
// };

const findKeyByValue = function (object, value) {
  for (let property in object) {
    if (object[property] === value) {
      return property;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
