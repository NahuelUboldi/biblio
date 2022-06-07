const solution = require('./areEquallyStrong');
const data = require('./areEquallyStrong-tests.json');

describe('tests for are equally strong kata', () => {
  data.tests.forEach((t) => {
    const output = solution(...t.input);
    it(`should return ${t.expectedOutput} for ${t.input} // output: ${output}`, () => {
      expect(output).toBe(t.expectedOutput);
    });
  });
});
