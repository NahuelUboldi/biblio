const tests = [
  {
    input: [2, 4, 1, 0],
    expectedOutput: 3,
  },
  {
    input: [1, 1, 1, 1],
    expectedOutput: 0,
  },
  {
    input: [-1, 4, 10, 3, -2],
    expectedOutput: 7,
  },
  {
    input: [10, 11, 13],
    expectedOutput: 2,
  },
  {
    input: [-2, -2, -2, -2, -2],
    expectedOutput: 0,
  },
  {
    input: [-1, 1, -3, -4],
    expectedOutput: 4,
  },
  {
    input: [-14, 15, -15],
    expectedOutput: 30,
  },
];
module.exports = tests;
