// only need these if testing
// const eqArrays = require('./eqArrays');
// const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  //import util library and require inspect
  const inspect = require('util').inspect;
  if (inspect(actual) === inspect(expected)) {
    //ammend console.log responses with inspect for string representation of objects
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

//test cases
// assertObjectsEqual(eqObjects({a: 1, b: 2, c: '3'}, {b: 2, c: '3', a: 1}), true);
// assertObjectsEqual(eqObjects({a: 3, b: 1, c: 5, d: 2}, {d: 2, a: 3, c: 5, b: 1}), true);
// assertObjectsEqual(eqObjects({name: 'Jane', address: '123 Centre St', cats: 2},
//   {name: 'Jane', cats: 2, address: '123 Centre St', }), true);