// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

function solution(inputArray) {
  let maxDiff = 0;
  for (let i = 1; i < inputArray.length; i += 1) {
    const res = inputArray[i-1] > inputArray[i] ? inputArray[i-1] - inputArray[i] : inputArray[i] - inputArray[i-1]
    maxDiff = maxDiff > res ? maxDiff : res;
  }
  return maxDiff;
}

module.exports = solution;
