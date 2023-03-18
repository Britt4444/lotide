const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue.js');

describe('#findKeyByValue', () => {
  it('returns undefined for (bestTVShowsByGenre, "House")', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "House"), undefined);
  });
  it('returns "sitcom" for (bestTVShowsByGenre, "Friends")', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Friends"), "sitcom");
  });
  it('returns "drama" for (bestTVShowsByGenre, "The Wire")', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it('returns undefined for (bestTVShowsByGenre, "Survivor")', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Survivor"), undefined);
  });
  it('returns "reality" for (bestTVShowsByGenre, "Is it Cake?")', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Is it Cake?"), "reality");
  });
});


//TEST OBJECT
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  sitcom: "Friends",
  fantasy: "LOTR: The Rings of Power",
  reality: "Is it Cake?",
};
