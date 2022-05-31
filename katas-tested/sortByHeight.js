// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

function solution(n) {
  const result = [];
  const treeIndexes = [];
  const persons = [];
  for (let i = 0; i < n.length; i++) {
    n[i] === -1 ? treeIndexes.push(i) : persons.push(n[i]);
  }
  persons.sort((a, b) => a - b);
  for (let i = 0; i < n.length; i++) {
    if (treeIndexes.includes(i)) {
      result.push(-1);
      continue;
    }
    result.push(persons[0]);
    persons.shift();
  }
  return result;
}

// OTHER SOLUTION
function solutionTwo(n) {
  const filterAndSorted = n.filter((num) => num !== -1).sort((a, b) => a - b);
  return n.map((num) => (num === -1 ? -1 : filterAndSorted.shift()));
}

module.exports = solution;
module.exports = solutionTwo;
