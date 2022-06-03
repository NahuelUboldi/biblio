const solution = require("./firstNotRepeatingCharacter")

const tests = [
 ["abacabad","c"],
 ["abacabaabacaba","_"],
 ["z","z"],
 ["bcb","c"],
 ["abcdefghijklmnopqrstuvwxyziflskecznslkjfabe","d"],
 ["zzz","_"],
 ["bcccccccccccccyb","y"],
 ["xdnxxlvupzuwgigeqjggosgljuhliybkjpibyatofcjbfxwtalc","d"],
 ["ngrhhqbhnsipkcoqjyviikvxbxyphsnjpdxkhtadltsuxbfbrkof","g"]
]

describe("tests for first not repeating character kata", () => {
 tests.forEach((t) => {
  const [input,expectedOutput] = t
  const [output] = solution(input)

  it(`should return ${expectedOutput} for ${input} // output ${output}`, () => {
   expect(output).toBe(expectedOutput)
  })
 })
})