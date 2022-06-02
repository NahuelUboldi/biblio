const solution = require("./areSimilar")

tests = [
 [[[1,2,3],[1,2,3]],true],
 [[[1,2,3],[2, 1, 3]],true],
 [[[1, 2, 2],[2,1,1]],false],
 [[[1,1,4],[1,2,3]],false],
 [[[1,2,3],[1, 10, 2]],false],
 [[[2, 3, 1],[1, 3, 2]],true],
 [[[2, 3, 9],[10, 3, 2]],false],
 [[[4, 6, 3],[3, 4, 6]],false],
 [[[832, 998, 148, 570, 533, 561, 894, 147, 455, 279],[832, 998, 148, 570, 533, 561, 455, 147, 894, 279]],true],
 [[[832, 998, 148, 570, 533, 561, 894, 147, 455, 279],[832, 570, 148, 998, 533, 561, 455, 147, 894, 279]],false]
]
describe("tests for are similar kata", () => {
 tests.forEach(t => {
  const [input,expectedOutput] = t
  const output = solution(...input)

  it(`should return ${expectedOutput} for ${input} => output: ${output}`, () => {
   expect(output).toBe(expectedOutput)
  })

 })
})