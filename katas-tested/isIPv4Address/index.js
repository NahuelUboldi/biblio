// An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

// Given a string, find out if it satisfies the IPv4 address naming rules.

function solution(inputString) {
  const ipDir = inputString.split('.');
  if (ipDir.length !== 4) return false;
  for (let i = 0; i < ipDir.length; i += 1) {
    const num = Number(ipDir[i]);
    console.log(num);
    if ((!num && num !== 0) || num > 255 || num < 0) {
      console.log(num);
      return false;
    }
  }
  return true;
}
module.exports = solution;
