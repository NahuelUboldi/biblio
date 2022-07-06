// A media access control address (MAC address) is a unique identifier assigned to network interfaces for communications on the physical network segment.

// The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal digits (0 to 9 or A to F), separated by hyphens (e.g. 01-23-45-67-89-AB).

// Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.

function solution(s) {
  const hexGroups = s.split('-');
  if (hexGroups.length !== 6) return false;
  for (let i = 0; i < hexGroups.length; i += 1) {
    if (
      hexGroups[i].length !== 2 ||
      Number.isNaN(parseInt(hexGroups[i][0], 16)) ||
      Number.isNaN(parseInt(hexGroups[i][1], 16))
    )
      return false;
  }
  return true;
}

console.log({ s: solution('00-1B-63-84-45-E6'), exp: true });
console.log({ s: solution('12-34-56-78-9A-BG'), exp: false });
console.log({ s: solution('02-03-04-05-06-07-'), exp: false });
