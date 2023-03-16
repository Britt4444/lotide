const assertEqual = require('./assertEqual');

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    //Add an if condition to only increment our count in results if the item is found in the itemsToCount object.
    if (itemsToCount[item]) {
      //Increment the count of each item into results as we encounter each string item in the array.
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;