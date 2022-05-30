// CODESIGNAL
//matrix = [[0, 1, 1, 2], 
//          [0, 5, 0, 0], 
//          [2, 0, 3, 3]]
//-> 9

//matrix = [[1, 1, 1, 0], 
//          [0, 5, 0, 1], 
//          [2, 1, 3, 10]]
// -> 9
function findIndex(arr,indexesOfZero) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      if(indexesOfZero.includes(i)) continue
      indexesOfZero.push(i)
    }
  }
  return indexesOfZero
}

function solution(matrix) {
  let matrixSum = 0;
  let indexesOfZero = [];
	for (let i = 0; i < matrix.length; i++) {
    indexesOfZero = findIndex(matrix[i],indexesOfZero)
    for (let j = 0; j < matrix[i].length; j++) {
      if(!indexesOfZero.includes(j)) matrixSum += matrix[i][j]
    }    
  }
  return matrixSum
}

solution([[0, 1, 1, 2],[0, 5, 0, 0],[2, 0, 3, 3]])