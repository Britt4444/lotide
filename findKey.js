
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
