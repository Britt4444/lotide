const assert = require('chai').assert;
const letterPositions = require('../letterPositions.js');

describe('#letterPositions', () => {
  it('returns { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] } for results2', () => {
    assert.deepEqual(results2, { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] });
  });
  it('returns [0] for results1.l', () => {
    assert.deepEqual(results1.l, [0]);
  });
  it('returns [3, 5, 15, 18] for results1.h', () => {
    assert.deepEqual(results1.h, [3, 5, 15, 18]);
  });
});

const results1 = letterPositions("lighthouse in the house");
const results2 = letterPositions("hello");
console.log(letterPositions("lighthouse in the house"));
