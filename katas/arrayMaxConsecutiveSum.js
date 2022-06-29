// Given array of integers, find the maximal possible sum of some of its k consecutive elements.
function solution(inputArray, k) {
  let biggerSum = 0;
  const length = inputArray.length - k + 1;
  for (let i = 0; i < k; i += 1) {
    biggerSum += inputArray[i];
  }
  let tempSum = biggerSum;
  for (let i = 1; i < length; i += 1) {
    tempSum = tempSum - inputArray[i - 1] + inputArray[i + k - 1];
    if (tempSum > biggerSum) biggerSum = tempSum;
  }
  return biggerSum;
}

console.log({ s: solution([2, 3, 5, 1, 6], 2), exp: 8 });
