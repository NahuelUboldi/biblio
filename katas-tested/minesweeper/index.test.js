const solution = require('./index');
const tests = require('./data');

describe('tests for minesweeper kata', () => {
  tests.forEach((t) => {
    const output = solution(t.input);
    it(`should return ${t.expectedOutput} for ${t.input} // output: ${t.output}`, () => {
      expect(output).toEqual(t.expectedOutput);
    });
  });
});
