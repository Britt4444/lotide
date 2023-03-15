const assertEqual = require('../assertEqual.js');
const head = require('../head.js');

//Test code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([], undefined));
assertEqual(head(["Z"]), "Z");
assertEqual(head([4]), 4);