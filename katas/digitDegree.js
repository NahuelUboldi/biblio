// Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

// Given an integer, find its digit degree.

const sumDigits = (s) =>
  s
    .split('')
    .reduce((acc, n) => (acc += parseInt(n)), 0)
    .toString(10);
function solution(num) {
  let counter = 0;
  let strInt = num.toString(10);
  while (strInt.length > 1) {
    strInt = sumDigits(strInt);
    counter += 1;
  }
  return counter;
}
console.log({ s: solution(777773), exp: 3 });
