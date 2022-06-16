// Given a string, find the number of different characters in it.

function solution(s) {
  const chars = [];
  s.split('').forEach((l) => {
    if (!chars.includes(l)) chars.push(l);
  });
  return chars.length;
}
function solution2(s) {
  return new Set(s).size;
}

console.log({ s: solution('cabca'), exp: 3 });
console.log({ s: solution2('cabca'), exp: 3 });
