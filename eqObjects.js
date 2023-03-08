const assertEqual = require('./assertEqual');

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

//test cases
// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
// assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
// assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// eqObjects(shirtObject , anotherShirtObject); // => true
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
