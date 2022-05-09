// [9,3,9,3,9,7,9]
const numbers = {};
function solution(A) {
  for (let i = 0; i < A.length; i++) {
    numbers[A[i]] = (numbers[A[i]] || 0) + 1;
    if (numbers[A[i]] === 2) {
      delete numbers[A[i]];
    }
  }
  const res = Object.keys(numbers).find((key) => {
    return numbers[key] === 1;
  });
  return parseInt(res);
}
console.log(solution([9, 3, 9, 3, 9, 7, 9]));
