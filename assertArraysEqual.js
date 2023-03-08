const eqArrays = require('./eqArrays');

//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;

// assertArraysEqual(["Meow"], ["Meow"]);
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual(["Hi", "There"], ["Hi", "There"]);
// assertArraysEqual([1, 2, 3], ["1", "2", "3"]);
// assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);