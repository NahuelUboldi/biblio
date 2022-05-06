// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  const binary = Number(N).toString(2);
  let isGateOpen = false;
  const gaps = [];
  let counter = 0;
  for (let i = 0; i < binary.length; i++) {
    if (!isGateOpen && binary[i] === '1') {
      isGateOpen = true;
      continue;
    }
    if (isGateOpen && binary[i] === '0') {
      counter++;
    }
    if (isGateOpen && binary[i] === '1') {
      gaps.push(counter);
      counter = 0;
    }
  }

  return Math.max(0, ...gaps);
}

console.log(solution(1041)); //5
console.log(solution(32)); //0
console.log(solution(20)); // 1

//
