const assert = require('chai').assert;
const map = require('../map.js');

describe('#map', () => {
  it('returns ["g", "c", "t", "m", "t"] for (words, word => word[0])', () => {
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
  it('returns ["grounds", "controls", "tos", "majors", "toms"] for (words, word => word + "s")', () => {
    assert.deepEqual(map(words, word => word + 's'), ['grounds', 'controls', 'tos', 'majors', 'toms']);
  });
  it('returns [6, 7, 2, 5, 3] for (words, word => word.length)', () => {
    assert.deepEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
  });
  it('returns [true, false, true, false, false] for (words, word => word.length % 2 === 0)', () => {
    assert.deepEqual(map(words, word => word.length % 2 === 0), [true, false, true, false, false]);
  });
});

//TEST ARRAY
const words = ["ground", "control", "to", "major", "tom"];
