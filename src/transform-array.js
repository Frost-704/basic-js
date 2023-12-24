const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  console.log(arr)
  if (!Array.isArray(arr)) {
    throw Error ('\'arr\' parameter must be an instance of the Array!')
  }
const commands = ['--double-next', '--double-prev', '--discard-next', '--discard-prev']
let result = [];
arr.map((e,index) => {
  if (commands.includes(e)) {
switch (e) {
    case '--double-next':
      if (arr[index + 1] !== undefined) {
        result.push(arr[index + 1]);
        }
        break;
    case '--double-prev':
      if (typeof arr[index - 1] !== 'string' && arr[index - 1] !== undefined) {
    result.push(arr[index - 1]);
        }
        break;
    case '--discard-next':
      if (arr[index + 1] !== undefined) {
        arr.splice(index + 1, 1);
        }
        break;
    case '--discard-prev':
      if (typeof arr[index - 1] !== 'string' && result.length !== 0) {
        result.pop();
        }
        break;
}
    } else {
    result.push(e);
    }
  });
  return result;
}

module.exports = {
  transform
};
