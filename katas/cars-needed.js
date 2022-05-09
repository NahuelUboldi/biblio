// [1,4,1],[1,5,1] -> 2
// [4,4,2,4],[5,5,2,5] -> 3
// [2,3,4,2],[2,5,7,2] -> 2

function sumAllNum(arr) {
  return arr.reduce((acc, num) => {
    return (acc = acc + num);
  }, 0);
}

function solution(P, S) {
  let spacesAvailable = sumAllNum(S);
  let carsNeeded = S.length;
  P.forEach((num) => {
    spacesAvailable = spacesAvailable - num;
  });
  S.forEach((car) => {
    if (car <= spacesAvailable) {
      spacesAvailable = spacesAvailable - car;
      carsNeeded--;
    }
  });
  return carsNeeded;
}
console.log('solution: ' + solution([1, 4, 1], [1, 5, 1]));
console.log('solution: ' + solution([4, 4, 2, 4], [5, 5, 2, 5]));
console.log('solution: ' + solution([2, 3, 4, 2], [2, 5, 7, 2]));
// 17 - 4
// 13 - 4
// 9 - 2
// 7- 4 -> 3
