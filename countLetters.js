const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: actual === expected`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: actual !== expected`);
  }
};

const countLetters = function (string) {
  //empty obeject that will be result
  const result = {};
  //loop through string
  for (let letter of string) {
    if (letter !== " ") {
      //conditional to check if current item is a space
      if (result[letter]) {
        //checks if item is in object
        result[letter]++; // item is already in object so increase value by 1
      } else {
        result[letter] = 1; // item is not in object so it added it in and gives it a vlaue of 1
      }
    }
  }
  return result;
};

//test code
console.log(countLetters("lighthouse in the house"));
//countLetters("lighthouse in the house");
