const assertEqual = require('./assertEqual');

const findKeyByValue = (object, value) => {
  let keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

//test cases
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  sitcom: "Friends",
  fantasy: "LOTR: The Rings of Power",
  reality: "Is it Cake?",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "House"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Friends"), "sitcom");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Survivor"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Is it Cake?"), "reality");

/*
Instruction
Implement the function findKeyByValue which takes in an object and a value.
It should scan the object and return the first key which contains the given
value. If no key with that given value is found, then it should return undefined.
*/