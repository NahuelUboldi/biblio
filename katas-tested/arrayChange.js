// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

function solution(inputArray) {
  const newArr = [inputArray[0]]
  let count = 0
	for(let [i,curr] of inputArray.entries()) {
    if (i === 0) continue;
    const prev = newArr[newArr.length - 1]
    if (prev === curr) {
      count += 1;
      curr += 1;
    }
    if (prev > curr) {
      let temp = (prev + 1) - curr
      count += temp
      curr = curr + temp
    }
    newArr.push(curr)
  }
  return count
}

module.exports = solution;