// Given two strings, find the number of common characters between them.

function createObject(string) {
  const obj = {};
  string.split('').forEach((letter) => {
    !obj[letter] ? (obj[letter] = 1) : (obj[letter] += 1);
  });
  return obj;
}

function solution(s1, s2) {
  let count = 0;
  const s1Obj = createObject(s1);
  const s2Obj = createObject(s2);
  Object.keys(s1Obj).forEach((key) => {
    if (s2Obj[key] && s2Obj[key] > s1Obj[key]) {
      count += s1Obj[key];
    }
    if (s2Obj[key] && s2Obj[key] <= s1Obj[key]) {
      count += s2Obj[key];
    }
  });
  return count;
}

module.exports = solution;
