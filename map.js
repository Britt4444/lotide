const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

//create our own map function that accepts an array and callback fn, return new array
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
//TEST CASES
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't'], true);
assertArraysEqual(map(words, word => word + 's'), ['grounds', 'controls', 'tos', 'majors', 'toms'], true);
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3], true);
assertArraysEqual(map(words, word => word.length % 2 === 0), [true, false, true, false, false], true);