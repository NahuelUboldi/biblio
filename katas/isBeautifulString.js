function solution(s) {
  const setS = new Set();
  s.split('')
    .sort()
    .forEach((l) => setS.add(l));
  for (let i = 1; i < setS.size; i += 1) {
    const l = [...setS][i];
    const prevL = [...setS][i - 1];
    if (l.charCodeAt(0)) console.log({ i, l, prevL });
    if (l.charCodeAt(0) !== prevL.charCodeAt(0) + 1) return true;
    // if ((s.match(new RegExp(l, 'g')) || []).length > (s.match(new RegExp(nextL, 'g')) || []).length) return false
  }
  return true;
}

console.log({ s: solution('bbbaaacdffe'), exp: true });
