// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

function solution(arr) {
  const rowLength = arr.length;
  const colLength = arr[1].length;
  const finalArr = [];
  for (let i = 0; i < rowLength; i += 1) {
    const rowArr = [];
    for (let j = 0; j < colLength; j += 1) {
      const sqrCalc =
        Number((arr[i - 1] ?? [])[j - 1] || false) +
        Number((arr[i - 1] ?? [])[j] || false) +
        Number((arr[i - 1] ?? [])[j + 1] || false) +
        Number(arr[i][j - 1] || false) +
        Number(arr[i][j + 1] || false) +
        Number((arr[i + 1] ?? [])[j - 1] || false) +
        Number((arr[i + 1] ?? [])[j] || false) +
        Number((arr[i + 1] ?? [])[j + 1] || false);
      rowArr.push(sqrCalc);
    }
    finalArr.push(rowArr);
  }
  return finalArr;
}

module.exports = solution;
