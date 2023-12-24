const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
  let counter = 0;
  let newArr = [];
    for (let i = 0; i < matrix.length; i += 1) {
  let prevRow = matrix[i - 1];
  let currentRow = matrix[i]
  let nextRow = matrix[i + 1];
  for (let j = 0; j < matrix[i].length; j += 1) {
[prevRow, currentRow, nextRow].forEach(row => {
    if (row) {
      if (row === nextRow || row === prevRow ) {
        if (row[j] === true) counter += 1;
        }
      if (row[j - 1] === true) counter += 1;
      if (row[j + 1] === true) counter += 1;
    }
  })
  newArr.push(counter);
  counter = 0;
      }
      result.push(newArr)
      newArr = [];
    }
  return result;
}

module.exports = {
  minesweeper
};
