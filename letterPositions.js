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

const letterPositions = function(sentence) {
  const array = sentence.split("");
  let space = ' ';
  const results = {};
  //use forEach to count each letter in the new array
  array.forEach((letter, i) => {
    //cannot use results.hasOwnproperty(letter) directly on the object
    if (!(Object.prototype.hasOwnProperty.call(results, letter))) {
      results[letter] = [i];
    } else {
      results[letter].push(i);
    }
    //use delete to remove spaces from results object
    delete results[space];
  });
  return results;
};

//Test cases
assertArraysEqual(letterPositions("lighthouse in the house").l, [0]); //pass
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]); //pass
assertArraysEqual(letterPositions("hello").e, [1]); //pass
assertArraysEqual(letterPositions("hello").o, [0]); //fail
assertArraysEqual(JSON.stringify(letterPositions("hello")), JSON.stringify({ h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }));