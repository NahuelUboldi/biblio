//inputArray = ["aba", "aa", "ad", "vcd", "aba"] -> ["aba", "vcd", "aba"].
function checkLongestString(arr) {
  let longestString = 0
  for(let i = 0; i < arr.length; i++) {
    longestString = arr[i].length > longestString ? arr[i].length : longestString;
  }
  return longestString
}

function solution(inputArray) {
	const longestString = checkLongestString(inputArray)
  const result = []
  for(let i = 0; i < inputArray.length; i++) {
    if(inputArray[i].length === longestString) result.push(inputArray[i])
  }
  return result
}

solution(["aba", "aa", "ad", "vcd", "aba"])