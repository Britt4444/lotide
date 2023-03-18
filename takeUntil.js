
//Implement takeUntil which will keep collecting items from
//a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};

module.exports = takeUntil;
