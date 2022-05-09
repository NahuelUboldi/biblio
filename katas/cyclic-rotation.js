// A = [3, 8, 9, 7, 6] K = 3 -> [9, 7, 6, 3, 8]

function solution(A, K) {
  for (let i = 0; i < K; i++) {
    const lastNum = A.pop();
    A.unshift(lastNum);
  }
  return A;
}

console.log(solution([3, 8, 9, 7, 6], 3));
