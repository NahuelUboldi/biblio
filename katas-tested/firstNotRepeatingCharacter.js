// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

function solution(s) {
  const obj = {}
  for(let i = 0; i < s.length; i++) {
    if(obj[s[i]]) {
      obj[s[i]] = {index: Number.POSITIVE_INFINITY}
    } else {
      obj[s[i]] = {index: i}
    }
  }
  const objKeys = Object.keys(obj).sort((a,b) => obj[a].index < obj[b].index ? -1 : 1)  
  return obj[objKeys[0]].index !== Number.POSITIVE_INFINITY ? objKeys[0] : "_"
}

module.exports = solution