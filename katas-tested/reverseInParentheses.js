// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

function reverseString(str) {
  return str.split('').reverse().join('');
}
function flattenParenthesis(string) {
  if (/\(/.test(string) === false) {
    return reverseString(string);
  }
  return string;
}
flattenParenthesis('(hola');
function solution(inputString) {
  const finalStringArr = [];
  let counter = 0;
  let tempS = '';
  let tempNS = '';
  for (let i = 0; i < inputString.length; i += 1) {
    console.log({ i, ltr: inputString[i], counter });
    // console.log({tempS,tempNS})
    // console.log("////////////")

    if (inputString[i] === '(') {
      if (counter === 0) {
        finalStringArr.push(tempS);
        tempS = '';
      }
      counter += 1;
    }
    if (inputString[i] === ')') {
      if (counter === 1) {
        // sent to flatten function
        // return flattened string
        // push into finalStringArr
      }
      counter -= 1;
    }
    if (counter === 0 && inputString[i] !== ')') {
      tempS += inputString[i];
    }
    if (counter > 0) {
      tempNS += inputString[i];
    }
  }
  console.log({ finalStringArr });
  return inputString;
}

// "a" -> temparr++

solution('foo(bar(baz))blim');

module.exports = solution;
