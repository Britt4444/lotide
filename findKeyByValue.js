
const findKeyByValue = (object, value) => {
  let keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;


/*
Instruction
Implement the function findKeyByValue which takes in an object and a value.
It should scan the object and return the first key which contains the given
value. If no key with that given value is found, then it should return undefined.
*/