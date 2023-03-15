# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @britt4444/lotide`

**Require it:**

`const _ = require('@britt4444/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: asserts strict equality between 2 arrays
* `assertEqual`: asserts strict equality between 2 values
* `assertObjectsEqual`: asserts strict equality between 2 objects
* `countLetters`: returns an object that counts all letters from a string input
* `countOnly`: returns an object of counted letters from a string as requested by specifying object
* `eqArrays`: returns true/false strictly comparing 2 arrays
* `eqObjects`: returns true/false strictly comparing key/value pairs of 2 objects
* `findKey`: returns a key (if it exists) in an object based on truthy callback value
* `findKeyByValue`: returns first object key in which a search value is found
* `flatten`: takes in array that contains nested arrays and returns a flattened version
* `head`: returns the first value of an array
* `letterPositions`: returns object that lists all indices of each character from input string
* `map`: returns new array based on results of a callback function
* `middle`: returns middle-most elements of an array
* `tail`: returns all but the first value of an array
* `takeUntil`: returns a slice of an array up until callback condition is met
* `without`: returns a subset of a given array, removing unwanted items