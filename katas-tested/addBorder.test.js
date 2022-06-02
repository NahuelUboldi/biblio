const solution = require("./addBorder")

const tests = [
 [["abc","ded"],["*****","*abc*","*ded*","*****"]],
 [["aa","**","zz"],["****","*aa*","****", "*zz*","****"]],
 [["abcde","fghij","klmno","pqrst","uvwxy"],["*******","*abcde*","*fghij*","*klmno*","*pqrst*","*uvwxy*","*******"]],
 [["wzy**"],["*******", "*wzy***", "*******"]]
]

describe("tests for add border kata", () => {
 tests.forEach((t) => {
  const [input,expectedOutput] = t;
  const [output] = solution(input)

  test(`should return ${expectedOutput} for ${input} => output: ${output}`, () => { 
   expect(output).toEqual(expectedOutput)
   })
 })
})