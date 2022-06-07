// Call two arms equally strong if the heaviest weights they each are able to lift are equal.
// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.
// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  const yourArms = [yourRight, yourLeft].sort((a, b) => b - a);
  const friendsArms = [friendsRight, friendsLeft].sort((a, b) => b - a);
  if (yourArms[0] === friendsArms[0] && yourArms[1] === friendsArms[1])
    return true;
  return false;
}

module.exports = solution;
