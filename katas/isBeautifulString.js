function solution(s) {
  const setS = new Set();
  s.split('')
    .sort()
    .forEach((l) => setS.add(l));
  if ([...setS][0] !== 'a') return false;
  for (let i = 1; i < setS.size; i += 1) {
    const l = [...setS][i];
    const prevL = [...setS][i - 1];
    if (l.charCodeAt(0))
      if (l.charCodeAt(0) !== prevL.charCodeAt(0) + 1) return false;
    if (
      (s.match(new RegExp(l, 'g')) || []).length >
      (s.match(new RegExp(prevL, 'g')) || []).length
    )
      return false;
  }
  return true;
}

console.log({ s: solution('bbbaaacdffe'), exp: true });
