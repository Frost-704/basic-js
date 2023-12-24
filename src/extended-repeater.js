const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let arr = [];
  let optionsSeparator = options.separator || '+';
  let optionsAdditionRepeatTimes = options.additionRepeatTimes || 1;
  let optionsRepeatTimes = options.repeatTimes || 1;
  let string = String(str);
  let addition = options.addition === undefined ? '': String(options.addition);
  let additionSeparator = options.additionSeparator || '|';
  for (let i = 0; i < optionsAdditionRepeatTimes; i += 1) {
    arr.push(addition)
    if (i !== optionsAdditionRepeatTimes - 1) {
      arr.push(additionSeparator)
      }
    }
    let result = `${string}${arr.join('')}`
    arr = [];
for (let j = 0; j < optionsRepeatTimes; j += 1) {
    arr.push(result)
    if (j !== optionsRepeatTimes - 1) {
      arr.push(optionsSeparator)
      }
    }
    result = arr.join('');
return result;
}

module.exports = {
  repeater
};
