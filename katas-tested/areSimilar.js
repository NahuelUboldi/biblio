function compareArrays(a,b) {
  const swapIndexes = []
  a.forEach((num,i) => {
    if (num !== b[i]) swapIndexes.push(i)
  })
  return swapIndexes
}

function solution(a, b) {
	let swapIndexes = compareArrays(a,b)
  if(swapIndexes.length === 2) {
    const tempValue = b[swapIndexes[0]]
    b[swapIndexes[0]] = b[swapIndexes[1]]
    b[swapIndexes[1]] = tempValue
    swapIndexes = compareArrays(a,b)
  }
  return swapIndexes.length === 0 ? true : false
}

module.exports = solution