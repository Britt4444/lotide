
const head = (array) => {
  if (!array.length) {
    return undefined;
  } else {
    return array[0];
  }
};
 
module.exports = head;