const assertEqual = require('./assertEqual');

const countLetters = function(string) {
  //remove spaces in input string
  let spaceless = string.replace(/\s/g, "");
  //define result as an empty object
  let result = {};
  //loop through string input using for...of
  for (const letter of spaceless) {
    if (result[letter]) {
      result[letter] ++;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;

//Test cases
assertEqual(countLetters("hello").l, 2); //pass
assertEqual(JSON.stringify(countLetters("lighthouse in the house")),
  JSON.stringify({
    l: 1,
    i: 2,
    g: 1,
    h: 4,
    t: 2,
    o: 2,
    u: 2,
    s: 2,
    e: 3,
    n: 1,
  })); //pass

assertEqual(countLetters("lighthouse in the house").h, 3); //fail
assertEqual(JSON.stringify(countLetters("lighthouse in the house")),
  JSON.stringify({
    l: 1,
    i: 2,
    g: 1,
    h: 4,
    t: 2,
    o: 2,
    u: 2,
    s: 2,
    e: 3,
    n: 1,
    z: 5,
  })); //fail

assertEqual(countLetters("its just a flesh wound").a, 1); //pass
assertEqual(JSON.stringify(countLetters("its just a flesh wound")),
  JSON.stringify({
    i: 1,
    t: 2,
    s: 3,
    j: 1,
    u: 2,
    a: 1,
    f: 1,
    l: 1,
    e: 1,
    h: 1,
    w: 1,
    o: 1,
    n: 1,
    d: 1,
  })); //pass