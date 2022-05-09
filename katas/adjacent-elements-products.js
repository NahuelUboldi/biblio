function solution(inputArray) {
  let result = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < inputArray.length; i++) {
    const currentProduct = inputArray[i] * inputArray[i + 1];
    currentProduct > result ? (result = currentProduct) : null;
  }
  return result;
}
