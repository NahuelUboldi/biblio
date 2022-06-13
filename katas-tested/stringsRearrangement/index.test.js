const solution = require('./index');
const tests = require('./data');

describe('tests for stringRearanging kata', () => {
  tests.forEach((t) => {
    const output = solution(t.input);
    it(`should return ${t.outputExpected} for ${t.input} // output: ${output}`, () => {
      expect(output).toBe(t.outputExpected);
    });
  });
});
