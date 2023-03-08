const eqArrays = require('./eqArrays');

const eqObjects = (object1, object2) => {
  let keysOne = Object.keys(object1);
  let keysTwo = Object.keys(object2);
  if (keysOne.length !== keysTwo.length) {
    return false;
  } else {
    for (const key of keysOne) {
      if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        return false;
      } else {
        return true;
      }
    }
  }
};

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