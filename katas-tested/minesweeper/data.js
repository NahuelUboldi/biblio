const tests = [
  {
    input: [
      [true, false, false],
      [false, true, false],
      [false, false, false],
    ],
    expectedOutput: [
      [1, 2, 1],
      [2, 1, 1],
      [1, 1, 1],
    ],
  },
  {
    input: [
      [false, false, false],
      [false, false, false],
    ],
    expectedOutput: [
      [0, 0, 0],
      [0, 0, 0],
    ],
  },
  {
    input: [
      [true, false, false, true],
      [false, false, true, false],
      [true, true, false, true],
    ],
    expectedOutput: [
      [0, 2, 2, 1],
      [3, 4, 3, 3],
      [1, 2, 3, 1],
    ],
  },
  {
    input: [
      [true, true, true],
      [true, true, true],
      [true, true, true],
    ],
    expectedOutput: [
      [3, 5, 3],
      [5, 8, 5],
      [3, 5, 3],
    ],
  },
  {
    input: [
      [false, true, true, false],
      [true, true, false, true],
      [false, false, true, false],
    ],
    expectedOutput: [
      [3, 3, 3, 2],
      [2, 4, 5, 2],
      [2, 3, 2, 2],
    ],
  },
  {
    input: [
      [true, false],
      [true, false],
      [false, true],
      [false, false],
      [false, false],
    ],
    expectedOutput: [
      [1, 2],
      [2, 3],
      [2, 1],
      [1, 1],
      [0, 0],
    ],
  },
];

module.exports = tests;
