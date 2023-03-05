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

//Implement takeUntil which will keep collecting items from
//a provided array until the callback provided returns a truthy value.
const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};

//Test cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);

console.log('---');

const data3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 16];
const results3 = takeUntil(data3, x => x % 8 === 0);
assertArraysEqual(results3, [1, 2, 3, 4, 5, 6, 7]);

console.log('---');

const results4 = takeUntil(data3, x => x / 2 === 4);
assertArraysEqual(results4, [1, 2, 3, 4, 5, 6, 7]);

console.log('---');

assertArraysEqual(takeUntil(data3, x => x > 1), [1]);