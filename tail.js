const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

//check if all return empty arrays
console.log(tail([1]));
console.log(tail(["T"]));
console.log(tail([]));
//test
console.log(tail([1, 27, 17, 56]));
console.log(tail(["12", "5", "17", "91"]));


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!