const assertEqual = require('../assertEqual.js');
const assert = require('chai').assert;

describe('#assertEqual', () => {
  it('returns assertion failed for "Lighthouse Labs"and "Bootcamp"', () => {
    assert.notStrictEqual("Lighthouse Labs", "Bootcamp");
  });
  it('returns assertion passed for 1 and 1', () => {
    assert.strictEqual(1, 1);
  });
});

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Meow", "Meow");
// assertEqual("Meow", "meow");
// assertEqual(100, 200);