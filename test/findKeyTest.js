const assert = require('chai').assert;
const findKey = require('../findKey.js');

describe('#findKey', () => {
  it('returns "noma" for (object1, x => x.stars === 2)', () => {
    assert.strictEqual(findKey(object1, x => x.stars === 2), "noma");
  });
  it('returns "Blue Hill" for (object1, x => x.stars < 3)', () => {
    assert.strictEqual(findKey(object1, x => x.stars < 3), "Blue Hill");
  });
  it('returns undefined for (object1, x => x.stars > 3)', () => {
    assert.strictEqual(findKey(object1, x => x.stars > 4), undefined);
  });
});

//TEST OBJECT
const object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
