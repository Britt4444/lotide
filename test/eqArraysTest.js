const assert = require('chai').assert;
const eqArrays = require('../eqArrays.js');

describe('#eqArrays', () => {
  it('returns true for ([1, 2, 3], [1, 2, 3])', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it('returns true for (["1", "2", "3"], ["1", "2", "3"])', () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });
  it('returns true for ([], [])', () => {
    assert.isTrue(eqArrays([], []));
  });
  it('returns false for ([1, 2, 3], [3, 2, 1])', () => {
    assert.isNotTrue(eqArrays([1, 2, 3], [3, 2, 1]));
  });
  it('returns false for (["1", "2", "3"], ["1", "2", 3])', () => {
    assert.isNotTrue(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });
});