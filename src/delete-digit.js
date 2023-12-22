const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numToArr = n.toString().split('');
  let result = [];
  if (numToArr.length === 2) {
    return numToArr[0] > numToArr[1] ? Number(numToArr[0]):Number(numToArr[1]);
  }
  for (let i = 0; i < numToArr.length; i +=1) {
  if (numToArr[i] < numToArr[i + 1]) {
    result = numToArr.splice(numToArr.indexOf(numToArr[i]),1)
  }
    }
    return Number(numToArr.join(''));
}

module.exports = {
  deleteDigit
};
