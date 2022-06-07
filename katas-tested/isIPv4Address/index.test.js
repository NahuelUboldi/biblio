const solution = require('./index');
const tests = require('./data');

describe('tests for is IPv4 address kata', () => {
  tests.forEach((t) => {
    const output = solution(t.input);
    it(`should return ${t.expectedOutput} for ${t.input} // output: ${output}`, () => {
      expect(output).toBe(t.expectedOutput);
    });
  });
});
