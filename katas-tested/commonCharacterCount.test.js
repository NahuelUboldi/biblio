const solution = require('./commonCharacterCount');
const tests = [
  ['', '', 0],
  ['aabcc', 'adcaa', 3],
  ['zzzz', 'zzzzzzzz', 4],
  ['abca', 'xyzbac', 3],
  ['a', 'b', 0],
  ['a', 'aaa', 1],
];

describe('common character count tests', () => {
  tests.forEach((test) => {
    const fnOutput = solution(`${test[0]}`, `${test[1]}`);
    it(`should return ${test[2]} for ${test[0]} and ${test[1]} // output: ${fnOutput}`, () => {
      expect(solution(`${test[0]}`, `${test[1]}`)).toBe(test[2]);
    });
  });

  // it('should return 0 for empty strings', () => {
  //   expect(solution('', '')).toBe(0);
  // });

  // it("should return 3 for 'aabcc' and 'adcaa'", () => {
  //   expect(solution('aabcc', 'adcaa')).toBe(3);
  // });

  // it("should return 4 for 'zzzz' and 'zzzzzzzz'", () => {
  //   expect(solution('zzzz', 'zzzzzzzz')).toBe(4);
  // });

  // it("should return 3 for 'abca' and'xyzbac'", () => {
  //   expect(solution('abca', 'xyzbac')).toBe(3);
  // });

  // it("should return 0 for 'a' and'b'", () => {
  //   expect(solution('a', 'b')).toBe(0);
  // });

  // it("should return 1 for 'a' and 'aaa'", () => {
  //   expect(solution('a', 'aaa')).toBe(1);
  // });
});
