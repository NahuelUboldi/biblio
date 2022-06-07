const solution = require('./palindromeRearranging');

const tests = [
  ['aabb', true],
  ['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc', false],
  ['abbcabb', true],
  ['zyyzzzzz', true],
  ['z', true],
  ['zaa', true],
  ['abca', false],
  ['abcad', false],
  ['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa', false],
  ['abdhuierf', false],
];

describe('tests for palindrome rearranging kata', () => {
  for (const [input, expectedOutput] of tests) {
    const output = solution(input);
    it(`should return ${expectedOutput} for ${input} // output: ${output}`, () => {
      expect(output).toBe(expectedOutput);
    });
  }
});
