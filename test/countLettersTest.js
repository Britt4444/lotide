const assert = require('chai').assert;
const countLetters = require('../countLetters.js');

describe('#countLetters', () => {
  it('returns obj1 for "lighthouse in the house"', () => {
    assert.deepEqual(countLetters("lighthouse in the house"), obj1);
  });
  it('returns 4 for ("lighthouse in the house").h', () => {
    assert.deepEqual(countLetters("lighthouse in the house").h, 4);
  });
  it('returns obj2 for "its just a flesh wound"', () => {
    assert.deepEqual(countLetters("its just a flesh wound"), obj2);
  });
  it('returns obj3 for "hello"', () => {
    assert.deepEqual(countLetters("hello"), obj3);
  });
  it('returns 2 for ("hello").1', () => {
    assert.deepEqual(countLetters("hello").l, 2);
  });
  it('returns 1 for ("its just a flesh wound").w', () => {
    assert.deepEqual(countLetters("its just a flesh wound").w, 1);
  });
});

//TEST OBJECTS
const obj1 = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

const obj2 = {
  i: 1,
  t: 2,
  s: 3,
  j: 1,
  u: 2,
  a: 1,
  f: 1,
  l: 1,
  e: 1,
  h: 1,
  w: 1,
  o: 1,
  n: 1,
  d: 1,
};

const obj3 = {
  h: 1,
  e: 1,
  l: 2,
  o: 1,
};