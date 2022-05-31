// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.
function solution(n) {
  const numbers = n.toString();
  const ticket = [0, 0];
  for (let i = 0; i < numbers.length / 2; i++) {
    ticket[0] += Number(numbers[i]);
    ticket[1] += Number(numbers[numbers.length - i - 1]);
  }
  return ticket[0] === ticket[1];
}

module.exports = solution;
