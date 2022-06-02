// Write a function that reverses characters in (possibly nested) parentheses in the input string.
// Input strings will always be well-formed with matching ()s.
function reverseString(str) {
  return str.split('').reverse().join('');
}
function flattenParenthesis(string) {
  let newString = '';
  const tempString = [];
  if (/^\(/) newString = string.slice(1, -1);
  //dont has brackets
  if (/\(/.test(string) === false) {
    return reverseString(string);
  }
  //has brackets
  for (let i = 0; i < newString.length; i++) {
    console.log(newString[i]);
  }
  return reverseString(newString);
}

flattenParenthesis('(ho(la))');

function solution(inputString) {
  const finalStringArr = [];
  let counter = 0;
  let tempS = '';
  let tempNS = '';
  for (let i = 0; i < inputString.length; i += 1) {
    // console.log({ i, ltr: inputString[i], counter });
    // console.log({tempS,tempNS})
    // console.log("////////////")

    if (inputString[i] === '(') {
      if (counter === 0) {
        finalStringArr.push(tempS);
        tempS = '';
      }
      counter += 1;
    }
    if (counter > 0) {
      tempNS += inputString[i];
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
  }
  return str
}

<<<<<<< HEAD
solution('foo(bar(baz))blim');

// Write a function that reverses characters in (possibly nested) parentheses in the input string.
// Input strings will always be well-formed with matching ()s.
function reverseBrackets(string) {
  return string.slice(1, -1).split('').reverse().join('');
}

function solution2(inputString, completeString = '') {
  let tempString = '';
  let isGateOpen = false;
  for (let i = 0; i < inputString.length; i++) {
    console.log({ i, letter: inputString[i] });
    console.log({ completeString, tempString });
    if (inputString[i] === '(') {
      isGateOpen = true;
      completeString += tempString;
      tempString = '';
      tempString += inputString[i];
      continue;
    }
    if (inputString[i] === ')') {
      isGateOpen = false;
      tempString += inputString[i];
      tempString = reverseBrackets(tempString);
      completeString += tempString;
      continue;
    }
    if (isGateOpen) {
      tempString += inputString[i];
    } else {
      completeString += inputString[i];
    }
  }
  if (/\(/.test(completeString)) {
    completeString = solution(completeString);
  }
  return completeString;
}

solution2('(no(hola))');
// solution('foo(bar(baz))blim');

=======
>>>>>>> b5f8eb0a7579711787b5db90c263ea21cc6063db
module.exports = solution;
