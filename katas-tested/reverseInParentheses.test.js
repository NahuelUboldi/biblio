const solution = require("./reverseInParentheses")
const tests = [
["(bar)","rab"],
["foo(bar)baz","foorabbaz"],
["foo(bar)baz(blim)","foorabbazmilb"],
["foo(bar(baz))blim","foobazrabblim"],
]

describe("reverse in parentheses tests",() => {
 tests.forEach((t) => {
  const [input,result] = t;
  const output = solution(input)
  it(`should return ${result} for ${input} // output: ${output}`, () => {
   expect(output).toBe(result)
  });
 });
});