const assert = require('chai').assert;
const eqObjects = require('../eqObjects.js');

describe('#eqObjects', () => {
  it('returns true for (mCSObject, aMCSObject)', () => {
    assert.strictEqual(eqObjects(mCSObject, aMCSObject), true);
  });
  it('returns true for (mCSObject, aMCSObject)', () => {
    assert.isTrue(eqObjects(mCSObject, aMCSObject));
  });
  it('returns true for (sObject, aSObject)', () => {
    assert.strictEqual(eqObjects(sObject, aSObject), true);
  });
  it('returns true for (sObject, aSObject)', () => {
    assert.isTrue(eqObjects(sObject, aSObject));
  });
  it('returns false for (mCSObject, lSMCSObject)', () => {
    assert.strictEqual(eqObjects(mCSObject, lSMCSObject), false);
  });
  it('returns false for (mCSObject, aMCSObject)', () => {
    assert.isNotTrue(eqObjects(mCSObject, lSMCSObject));
  });
  it('returns false for (sObject, lSSObject)', () => {
    assert.strictEqual(eqObjects(sObject, lSSObject), false);
  });
  it('returns false for (sObject, lSSObject)', () => {
    assert.isNotTrue(eqObjects(sObject, lSSObject));
  });
})


//objects for test cases
const mCSObject = { colors: ["red", "blue"], size: "medium" };
const aMCSObject = { size: "medium", colors: ["red", "blue"] };
const lSMCSObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
const sObject = { color: "red", size: "medium" };
const aSObject = { size: "medium", color: "red" };
const lSSObject = { size: "medium", color: "red", sleeveLength: "long" };