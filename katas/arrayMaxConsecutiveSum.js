// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

const sumAll = (a) => a.reduce((acc, n) => acc + n);
function solution(inputArray, k) {
  let biggerSum = 0;
  for (let i = 0; i < inputArray.length - k + 1; i += 1) {
    const tempSum = sumAll(inputArray.slice(i, k + i));
    tempSum > biggerSum ? (biggerSum = tempSum) : null;
  }
  return biggerSum;
}

console.log({ s: solution([2, 3, 5, 1, 6], 2), exp: 8 });
