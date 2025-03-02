const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  try {
    if (Object.prototype.toString.call(date) === "[object Date]" && date instanceof Date && !isNaN(date.valueOf()) && typeof date.getMonth === 'function' && date.constructor === Date && !Object.getOwnPropertyNames(date).includes('length')){
      const month = date.getMonth();
      if (month >= 0 && month <= 1 || month === 11) {
        return 'winter';
      } else if (month >= 2 && month <= 4) {
        return 'spring';
      } else if (month >= 5 && month <= 7) {
        return 'summer';
      } else if (month >= 8 && month <= 10) {
        return 'autumn';
      }
} else {
  throw new Error ('Invalid date!');
  }
}
catch (error) {
  throw new Error ('Invalid date!');
}
}

module.exports = {
  getSeason
};
