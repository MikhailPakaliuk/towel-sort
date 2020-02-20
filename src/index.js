
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = [];
  if (matrix == null) {
    return result;
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = (i % 2 == 0 ? 0 : matrix[i].length - 1); (i % 2 == 0 ? j < matrix[i].length : j >= 0); (i % 2 == 0 ? j++ : j--)) {
      result.push(matrix[i][j]);
    }
  }
  return result;
}
