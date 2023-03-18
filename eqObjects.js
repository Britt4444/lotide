const eqArrays = require('./eqArrays');

const eqObjects = (object1, object2) => {
  //define keys of each object
  let keysOne = Object.keys(object1);
  let keysTwo = Object.keys(object2);
  if (keysOne.length !== keysTwo.length) {
    return false;
  } else {
    for (const key of keysOne) {
      //compare key values, first by checking for array and passing eqArrays to params if true
      if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      //else compare key values
      } else if (object1[key] !== object2[key]) {
        return false;
      } else {
        return true;
      }
    }
  }
};

module.exports = eqObjects;


