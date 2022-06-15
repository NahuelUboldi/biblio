const tests = [
  {
    input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3],
    expectedOutput: [1, 2, 4, 5, 7, 8, 10],
  },
  {
    input: [[1, 1, 1, 1, 1], 1],
    expectedOutput: [],
  },
  {
    input: [[1, 2, 1, 2, 1, 2, 1, 2], 2],
    expectedOutput: [1, 1, 1, 1],
  },
  {
    input: [[1, 2, 1, 2, 1, 2, 1, 2], 10],
    expectedOutput: [1, 2, 1, 2, 1, 2, 1, 2],
  },
  {
    input: [[2, 4, 6, 8, 10], 2],
    expectedOutput: [2, 6, 10],
  },
];

module.exports = tests;
