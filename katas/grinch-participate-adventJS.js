function hasTheGrinchParticipate(word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === '(') count += 1;
    if (word[i] === '(' && count > 1) count = Number.POSITIVE_INFINITY;
    if (word[i] === ')' && count === 0) count = Number.POSITIVE_INFINITY;
    if (word[i] === ')' && word.length > 2) count -= 1;
    if (
      word[i] === '[' ||
      word[i] === ']' ||
      word[i] === '{' ||
      word[i] === '}'
    )
      count = Number.POSITIVE_INFINITY;
  }
  return count !== 0;
}
function isValid(letter) {
  const gifts = letter.trim().replace(/\s+/g, ' ').split(' ');
  let isItValid = true;
  gifts.forEach((gift) => {
    console.log(gift, hasTheGrinchParticipate(gift));
    if (hasTheGrinchParticipate(gift)) {
      isItValid = false;
    }
  });
  return isItValid;
}

console.log(isValid('bici coche (balón) bici coche peluche'), '-> ✅');
console.log(isValid('(muñeca) consola bici'), '-> ✅');
console.log(isValid('bici coche (balón bici coche'), '-> ❌');
console.log(isValid('peluche (bici [coche) bici coche balón'), '-> ❌');
console.log(isValid('(peluche {) bici'), '-> ❌');
console.log(isValid('() bici'), '-> ❌');
console.log(isValid('(()) bici'), '-> ❌');
console.log(isValid(')bici( casa play'), '-> ❌');
console.log(isValid('() casa play'), '-> ❌');
