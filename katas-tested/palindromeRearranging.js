// Given a string, find out if its characters can be rearranged to form a palindrome.

function solution(inputString) {
  const lettersCount = {};
  for (const l of inputString) {
    if (!lettersCount[l]) {
      lettersCount[l] = 1;
    } else {
      lettersCount[l] += 1;
    }
  }
  const odds = Object.values(lettersCount).filter((a) => a % 2 !== 0);
  if (odds.length > 1 || (inputString.length % 2 === 0 && odds.length === 1))
    return false;
  return true;
}

module.exports = solution;
