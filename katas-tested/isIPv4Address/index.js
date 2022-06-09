// An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

// Given a string, find out if it satisfies the IPv4 address naming rules.
function hardSolution(inputString) {
  const ipDir = inputString.split('.');
  if (ipDir.length !== 4) return false;
  for (let i = 0; i < ipDir.length; i += 1) {
    if ((ipDir[i].length > 1 && ipDir[i][0] === '0') || /[a-z]/i.test(ipDir[i]))
      return false;
    const num = parseInt(ipDir[i], 10);
    // console.log(num);
    if (Number.isNaN(num) || num > 255 || num < 0) {
      return false;
    }
  }
  return true;
}

function regexSolution(inputString) {
  // the regex is from stack overflow
  return /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/.test(inputString);
}

function solution(inputString) {
  let res;
  console.time('hard solution');
  res = hardSolution(inputString);
  console.timeEnd('hard solution');
  console.time('regex solution');
  res = regexSolution(inputString);
  console.timeEnd('regex solution');

  return res;
}

module.exports = solution;
