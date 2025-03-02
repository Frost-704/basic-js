const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    arr.forEach((e) => {
      if (Array.isArray(e)) {
        const deep = this.calculateDepth(e) + 1;
        if (deep > result) {
        result = deep; 
        }
        }
      })
  return result;
}
}

module.exports = {
  DepthCalculator
};
