const solution = require('./index');
const tests = require('./data-tests');

describe('tests for array maximal adjacent difference kata', () => {
  for (const t of tests) {
    const output = solution(t.input);
    it(`should return ${t.expectedOutput} for ${t.input} // output: ${output}`, () => {
      expect(output).toBe(t.expectedOutput);
    });
  }
});
