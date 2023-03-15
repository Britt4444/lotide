const assertArraysEqual = require('./assertArraysEqual');

//create our own map function that accepts an array and callback fn, return new array
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


module.exports = map;


const words = ["ground", "control", "to", "major", "tom"];
//TEST CASES
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't'], true);
assertArraysEqual(map(words, word => word + 's'), ['grounds', 'controls', 'tos', 'majors', 'toms'], true);
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3], true);
assertArraysEqual(map(words, word => word.length % 2 === 0), [true, false, true, false, false], true);