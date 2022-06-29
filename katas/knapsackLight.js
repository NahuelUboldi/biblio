function solution(value1, weight1, value2, weight2, maxW) {
  const conditions = {
    canTakeBoth: maxW >= weight1 + weight2,
    canTakeWeight1: maxW >= weight1,
    canTakeWeight2: maxW >= weight2,
  };
  if (conditions.canTakeBoth) return value1 + value2;
  if (conditions.canTakeWeight1 && conditions.canTakeWeight2)
    return Math.max(value1, value2);
  return conditions.canTakeWeight1
    ? value1
    : conditions.canTakeWeight2
    ? value2
    : 0;
}
console.log({ s: solution(3, 4, 5, 3, 3), exp: 5 });
