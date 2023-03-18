const assert = require('chai').assert;
const flatten = require('../flatten.js');

describe('#flatten', () => {
  it('returns [1, 2, 3, 4, 5, 6] for ([1, 2, [3, 4], 5, [6]])', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("returns 'Not an array!' for ('1', '2', [5, 8, 1])", () => {
    assert.deepEqual(flatten("1", "2", [5, 8, 1]), "Not an array!");
  });
  it("returns expected for flatten(actual)", () => {
    const expected = ["Hi", "my", "favourite", "foods", "are", "candy", "noodles", "coffee"];
    const actual = flatten(["Hi", "my", "favourite", "foods", "are", ["candy", "noodles", "coffee"]]);
    assert.deepEqual(actual, expected);
  });
});