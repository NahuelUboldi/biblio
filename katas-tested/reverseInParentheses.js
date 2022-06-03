// Write a function that reverses characters in (possibly nested) parentheses in the input string.
// Input strings will always be well-formed with matching ()s.
function solution(inputString) {
  let str = inputString;
  while (/\(/.test(str)) {
    const closeBracket = str.indexOf(')');
    const openBracket = str.lastIndexOf('(', closeBracket);
    const sliced = str
      .slice(openBracket + 1, closeBracket)
      .split('')
      .reverse()
      .join('');
    str = str.slice(0, openBracket) + sliced + str.slice(closeBracket + 1);
  }
  return str;
}
module.exports = solution;
