const assert = require('chai').assert;
const expect = require('chai').expect;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  it("returns results1 for countOnly(firstNames, itemsToCount)", () => {
    assert.deepEqual(countOnly(firstNames, itemsToCount), result1);
  });
  it("returns 1 for results1['Jason']", () => {
    expect(countOnly(firstNames, itemsToCount)['Jason']).to.equal(1);
  });
  it("returns undefined for results1['Karima']", () => {
    expect(countOnly(firstNames, itemsToCount)['Karima']).to.equal(undefined);
  });
  it("returns 2 for results1['Fang']", () => {
    expect(countOnly(firstNames, itemsToCount)['Fang']).to.equal(2);
  });
  it("returns undefined for results1['Agouhanna']", () => {
    expect(countOnly(firstNames, itemsToCount)['Agouhanna']).to.equal(undefined);
  });
})

//test cases
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const itemsToCount = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
const result1 = countOnly(firstNames, itemsToCount);