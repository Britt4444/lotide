
const countLetters = (string) => {
  //remove spaces in input string
  let spaceless = string.replace(/\s/g, "");
  //define result as an empty object
  let result = {};
  //loop through string input using for...of
  for (const letter of spaceless) {
    if (result[letter]) {
      result[letter] ++;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;