const solution = require('./sortByHeight');
const tests = [
  [
    [-1, 150, 190, 170, -1, -1, 160, 180],
    [-1, 150, 160, 170, -1, -1, 180, 190],
  ],
  [
    [-1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1],
  ],
  [[-1], [-1]],
  [
    [4, 2, 9, 11, 2, 16],
    [2, 2, 4, 9, 11, 16],
  ],
  [
    [2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1],
    [1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2],
  ],
  [
    [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3],
    [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77],
  ],
];

describe('sort by Height tests', () => {
  tests.forEach((test) => {
    const output = solution(test[0]);
    const [input, result] = test;
    it(`should return ${result} for ${input} | output: ${output}`, () => {
      expect(output).toEqual(result);
    });
  });
});
