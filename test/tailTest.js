const assert = require('chai').assert;
const tail = require('../tail.js');

describe("#tail", () => {
  it("returns [27, 17, 56] for [1, 27, 17, 56]", () => {
    assert.deepEqual(tail([1, 27, 17, 56]), [27, 17, 56]);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("returns [] for ['T']", () => {
    assert.deepEqual(tail(['T']), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("returns ['5', '17', '91'] for ['12', '5', '17', '91']", () => {
    assert.deepEqual(tail(['12', '5', '17', '91']), ['5', '17', '91']);
  });
});