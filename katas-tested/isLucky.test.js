const solution = require('./isLucky');
const tests = [
  [1230, true],
  [239017, false],
  [134008, true],
  [10, false],
  [11, true],
  [1010, true],
  [261534, false],
  [100000, false],
  [999999, true],
  [123321, true],
];

describe('is ticket number lucky', () => {
  tests.forEach((test) => {
    const result = solution(test[0]);
    it(`should return ${test[1]} for ${test[0]} // output: ${result}`, () => {
      expect(result).toBe(test[1]);
    });
  });
});
