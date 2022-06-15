// Given array of integers, remove each kth element from it.

function solution(inputArray, k) {
  let multiplier = 1;
  return inputArray.reduce((acc, n, i) => {
    if (i === k * multiplier - 1) {
      multiplier += 1;
    } else {
      acc.push(n);
    }
    return acc;
  }, []);
}

module.exports = solution;
