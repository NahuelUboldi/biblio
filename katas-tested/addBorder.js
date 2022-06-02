function solution(arr) {
  const topAndBottomBorder = "*".repeat(arr[0].length + 2)
  let newArr = [topAndBottomBorder]
  arr.forEach((str) => newArr = [...newArr, `*${str}*`])
  newArr = [...newArr,topAndBottomBorder]
  return newArr
}

module.exports = solution