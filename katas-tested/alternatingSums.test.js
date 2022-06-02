const solution = require("./alternatingSums")

const tests = [
 [[50, 60, 60, 45, 70],[180, 105]],
 [[100, 50],[100, 50]],
 [[80],[80,0]],
 [[100, 50, 50, 100],[150, 150]],
 [[100, 51, 50, 100],[150, 151]]
]


describe("tests for alternating Sums kata", () => {
 tests.forEach((t) => {
  const [input,expectedOutput] = t 
  const output = solution(input)
  it(`should return ${expectedOutput} for ${input} => output: ${output}`,() => {
   expect(output).toEqual(expectedOutput)
  })
 })
})