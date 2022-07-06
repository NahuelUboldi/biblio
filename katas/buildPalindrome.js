// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

const checkPalindrome = (s) => {
  for (let i = 0; i < s.length / 2; i += 1) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }
  return true;
};
function solution(st) {
  if (checkPalindrome(st)) return st;
  for (let i = 1; i < st.length; i += 1) {
    const newS = st + st.slice(0, i).split('').reverse().join('');
    if (checkPalindrome(newS)) return newS;
  }
  return st;
}

console.log({ s: solution('abcdc'), exp: 'abcdcba' });
