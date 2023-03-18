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