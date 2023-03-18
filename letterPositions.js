const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = letterPositions;