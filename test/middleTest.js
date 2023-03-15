const middle = require('../middle.js');
const assertArraysEqual = require('../assertArraysEqual.js');

//TEST CODE

assertArraysEqual(middle([1]), []); //pass
assertArraysEqual(middle([1, 2]), []); //pass

assertArraysEqual(middle([1, 2, 3]), [2]); //pass
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); //pass

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); //pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); //pass