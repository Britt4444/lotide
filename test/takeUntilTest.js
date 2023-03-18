const assert = require('chai').assert;
const takeUntil = require('../takeUntil.js');


describe('#takeUntil', () => {
  it('returns [1, 2, 5, 7, 2] for (data1, x => x < 0)', () => {
    assert.deepEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
  });
  it("returns ['I've', 'been', 'to', 'Hollywood'] for (data2, x => x === ',')", () => {
    assert.deepEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);
  });
  it("returns [1, 2, 3, 4, 5, 6, 7] for (data3, x => x % 8 === 0)", () => {
    assert.deepEqual(takeUntil(data3, x => x % 8 === 0), [1, 2, 3, 4, 5, 6, 7]);
  });
  it("returns [1, 2, 3, 4, 5, 6, 7] for (data3, x => x % 2 === 4)", () => {
    assert.deepEqual(takeUntil(data3, x => x / 2 === 4), [1, 2, 3, 4, 5, 6, 7]);
  });
  it("returns [1] for (data3, x => x > 1)", () => {
    assert.deepEqual(takeUntil(data3, x => x > 1), [1]);
  });
});

//TEST OBJECTS
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const data3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 16];
