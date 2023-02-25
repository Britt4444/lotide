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

const without = function(source, itemsToRemove) {
  let result = [];
  for (const element of source) {
    if (!itemsToRemove.includes(element)) {
      result.push(element);
    }
  }
  return result;
};


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); //pass
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); //pass
assertArraysEqual(without(["1", "2", "3"], ["2", "3"]), ["1", "2", 3]); //fail
assertArraysEqual(without(["Hello", "kitty", "CAT"], ["Hello", "Kitty"]), ["CAT"]); //fail
assertArraysEqual(without(["Hello", "kitty", "CAT"], ["Hello", "kitty"]), ["CAT"]); //pass

const array = [1, 2, 3];
without(array, [1]);
assertArraysEqual(array, [1, 2, 3]); //pass

const string = ["1", "2", "3"];
without(string, [1, "2", "3"]);
assertArraysEqual(string, ["1", "2", "3"]); //pass

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); //pass