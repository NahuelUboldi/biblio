// Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.

// Note: You're only rearranging the order of the strings, not the order of the letters within the strings!

function solution(arr) {
  const result = arr.map((word, i) => arr.slice(i + 1).map((w) => w));
  return result;
}

console.log({ s: solution(['aba', 'bbb', 'bab']), exp: false });

// fn check: check if two string differ in one caracter
// fn rearange:
// main: loop through array and send two string to check fn
// main: if (true) return true
// main:  if (false) rearange array and

module.exports = solution;
