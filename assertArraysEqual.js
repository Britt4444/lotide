const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    //return failed assertion to stop function from moving forward
    return console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
  //assuming arrays are equal length, pass them to eqArrays function
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

assertArraysEqual(["Meow"], ["Meow"]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["Hi", "There"], ["Hi", "There"]);
assertArraysEqual([1, 2, 3], ["1", "2", "3"]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);