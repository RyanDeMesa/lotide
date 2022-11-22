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

module.exports = middle;