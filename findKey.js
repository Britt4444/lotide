const assertEqual = require('./assertEqual');

//Implement the function findKey which takes in an object and a callback.
//It should scan the object and return the first key for which the callback
//returns a truthy value. If no key is found, then it should return undefined.

const findKey = (object, callback) => {
  let keys = Object.keys(object);
  for (const key of keys) {
    //returns key if callback is truthy
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;

//Test cases
const object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(object1, x => x.stars === 2), "noma"); //pass
assertEqual(findKey(object1, x => x.stars < 3), "Blue Hill"); //pass
assertEqual(findKey(object1, x => x.stars > 4), undefined); //pass