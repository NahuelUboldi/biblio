function solution(message, K) {
  const arr = message.split(' ');
  const solution = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (counter + arr[i].length <= K) {
      counter = counter + arr[i].length + 1;
      solution.push(arr[i]);
    }
  }
  return solution.join(' ');
}
console.log(solution('the quick brown fox jumps over the lazy dog', 39));
