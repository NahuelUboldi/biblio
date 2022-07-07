// Given a string, return its encoding defined as follows:

// First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
// for example, "aabbbc" is divided into ["aa", "bbb", "c"]
// Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
// for example, substring "bbb" is replaced by "3b"
// Finally, all the new strings are concatenated together in the same order and a new string is returned.

function solution(s) {
  let final = '';
  let temp = [];
  for (let i = 0; i < s.length; i += 1) {
    if (!temp[0]) {
      temp = [s[i], 1];
      continue;
    }
    if (temp[0] === s[i]) {
      temp[1] += 1;
    }
    if (temp[0] !== s[i]) {
      temp[1] === 1 ? (final += temp[0]) : (final += `${temp[1]}${temp[0]}`);
      temp = [s[i], 1];
    }
    if (!s[i + 1]) {
      temp[1] === 1 ? (final += temp[0]) : (final += `${temp[1]}${temp[0]}`);
    }
  }
  return final;
}

console.log({ s: solution('aabbbc'), exp: '2a3bc' });
// console.log({ s: solution("abbcabb"), exp: "a2bca2b" });
