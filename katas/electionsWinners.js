// Elections are in progress!

// Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.

// The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.

function solution(votes, k) {
  const maxVotes = votes.sort((a, b) => b - a);
  console.log(maxVotes);
  const stillWithChances = votes.reduce((acc, v) => {
    if (v + k > maxVotes[0]) acc += 1;
    return acc;
  }, 0);
  if (stillWithChances) return stillWithChances;
  if (maxVotes[0] !== maxVotes[1]) return 1;
  return 0;
}
console.log({ s: solution([5, 1, 3, 4, 1], 0), exp: 1 });
