// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
// [1,3,2,1] -> false
// [1, 2, 1, 2] -> false
// [1, 2, 1, 2] -> false

// //[10,11,12,11,12] -> false
// i i-1 => <
// i i-2 => <=
// i i+1 => < || undefined
// i+1 i-1 => >=

// // [3, 5, 67, 98, 3, 99,2,100] -> false
// remove i
// i i-1 => <
// i i-2 => <=
// i i+1 => < || undefined
// i+1 i-1 => >

// // [1, 2, 2, 3, 4, 3, 6] -> true
// remove i
// i i-1 => <=
// i i-2 => ><=
// i i+1 => < || undefined
// i+1 i-1 => >

// REMOVE I
// // [10, 11, 12, 11, 13, 14] -> true
// // [1, 2, 3, 4, 3, 6] -> true
// // [3, 5, 67, 98, 3] -> true
// remove i
// i i-1 => <
// i i-2 => <=
// i i+1 => < || undefined
// i+1 i-1 => >

// REMOVE I-1
// // [1, 2, 3, 99, 4, 5] -> true
// // [1,5,2,3,4,5] -> true
// // [1,3,2] -> true
// // [10, 1, 2, 3, 4, 5] -> true
// remove i-1
// i i-1 => <
// i i-2 => > || undefined
// i i+1 => <
// i+1 i-1 => <

function solution(sequence) {
  let count = 0;
  const s = sequence;
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] >= s[i]) {
      count++;
      if (count > 1) return false;
      if (s[i - 2] >= s[i] && s[i - 1] >= s[i + 1]) return false;
    }
  }
  return true;
}

// console.log(solution([1, 3, 2, 1]), ' -> false');
// console.log(solution([1, 5, 6, 3, 4, 5]), ' -> false');
console.log(solution([3, 5, 67, 98, 3]), ' -> true');
// console.log(solution([1, 2, 3, 4, 3, 6]), ' -> true');
// console.log(solution([1, 2, 1, 2]), ' -> false');
// console.log(solution([10, 1, 2, 3, 4, 5]), ' -> true');
// console.log(solution([1, 2, 1, 2]), ' -> false');
