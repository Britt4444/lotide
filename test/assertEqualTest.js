const assertEqual = require('../assertEqual.js');
const assert = require('chai').assert;

describe('#assertEqual', () => {
  it('returns false for ("Lighthouse Labs", "Bootcamp")', () => {
    assert.isNotTrue(assertEqual("Lighthouse Labs", "Bootcamp"));
  });
  it('returns true for (1, 1)', () => {
    assert.isTrue(assertEqual(1, 1));
  });
})

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Meow", "Meow");
// assertEqual("Meow", "meow");
// assertEqual(100, 200);