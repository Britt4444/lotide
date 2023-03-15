const assertArraysEqual = require('./assertArraysEqual');

/*Create a function flatten which will take in an array containing
elements including nested arrays of elements, and return a
"flattened" version of the array.*/
const flatten = function(array) {
  let flattened = [];
  if (Array.isArray(array)) {
    flattened = array.flat();
  } else {
    return "Not an array!";
  }
  return flattened;
};

module.exports = flatten;

//test cases
assertArraysEqual((flatten([1, 2, [3, 4], 5, [6]])), [1, 2, 3, 4, 5, 6]);
assertArraysEqual((flatten("1", "2", [5, 8, 1])), "Not an array!");
assertArraysEqual((flatten(["Hi", "my", "favourite", "foods", "are", ["candy", "noodles", "coffee"]])),
  ["Hi", "my", "favourite", "foods", "are", "candy", "noodles", "coffee"]);