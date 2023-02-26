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
}

assertArraysEqual((flatten([1, 2, [3, 4], 5, [6]])), [1, 2, 3, 4, 5, 6]);
assertArraysEqual((flatten("1", "2", [5, 8, 1])), "Not an array!");
assertArraysEqual((flatten(["Hi", "my", "favourite", "foods", "are", ["candy", "noodles", "coffee"]])), 
["Hi", "my", "favourite", "foods", "are", "candy", "noodles", "coffee"]);