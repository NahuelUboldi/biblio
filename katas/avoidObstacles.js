function solution(arr) {
  let jump = 2;
  while (true) {
    let bool = true;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] % jump === 0) {
        bool = false;
        jump += 1;
        break;
      }
    }
    if (bool) break;
  }
  return jump;
}

console.log({ s: solution([5, 3, 6, 7, 9]), exp: 4 });
