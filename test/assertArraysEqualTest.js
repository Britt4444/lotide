const assertArraysEqual = require('../assertArraysEqual.js');

// assertArraysEqual(["Meow"], ["Meow"]); //pass
// assertArraysEqual([1, 2, 3], [1, 2, 3]); //pass
// assertArraysEqual(["Hi", "There"], ["Hi", "There"]); //pass
// assertArraysEqual([1, 2, 3], ["1", "2", "3"]); //fail
// assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); //fail