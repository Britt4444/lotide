const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let belly = [];
  // get index of the middle value, or ending value if number is even
  let index = Math.floor(array.length / 2);
  for (let i = 0; i < array.length; i++) {
    //if array contains 2 or less elements, return empty array
    if (array.length <= 2) {
      return belly;
    //if array is odd, return 1 middle value
    } else if (array.length % 2 !== 0) {
      belly = [array[index]];
    //if array if even, return 2 middle values
    } else if (array.length % 2 === 0) {
      belly = [array[index - 1], (array[index])];
    }
  }
  return belly;
};

//TEST CODE

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

/*
Implement middle which will take in an array and return the
middle-most element(s) of the given array.
For arrays with one or two elements, there is no middle. Return an empty array.
For arrays with odd number of elements, an array containing a single middle element should be returned.
For arrays with an even number of elements, an array containing the two elements in the middle should be returned
*/