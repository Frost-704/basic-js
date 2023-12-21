const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  console.log(parseFloat(sampleActivity))
  console.log(Number.isNaN(parseFloat(sampleActivity)))
  if (Number.isNaN(Number(sampleActivity)) || Number(sampleActivity) > 15 || typeof sampleActivity !== 'string' || !isFinite(Number(sampleActivity)) || sampleActivity.trim().length <= 0 || Number(sampleActivity) <= 0) {
    return false;
  }
  console.log(Math.log(15 / 8.0))
  const k = 0.693 / HALF_LIFE_PERIOD;
  const result = Math.log(MODERN_ACTIVITY / sampleActivity) / k;
  return Math.ceil(result);
}

module.exports = {
  dateSample
};
