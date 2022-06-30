// Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

// The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:

const validateSquare = (sq) => {
  if (!'abcdefgh'.includes(sq[0]) || Number(sq[1]) > 8 || Number(sq[1]) < 1)
    return false;
  return true;
};
function solution(bishop, pawn) {
  const cols = 'abcdefgh';
  if (!validateSquare(bishop) || !validateSquare(pawn)) return false;
  if (bishop[0] === pawn[0] && bishop[1] !== pawn[1]) return false;
  const bishopCol = cols.indexOf(bishop[0]) + 1;
  const pawnCol = cols.indexOf(pawn[0]) + 1;
  const colsDiff = Math.max(bishopCol, pawnCol) - Math.min(bishopCol, pawnCol);
  const rowsDiff = Math.max(bishop[1], pawn[1]) - Math.min(bishop[1], pawn[1]);
  return colsDiff === rowsDiff;
}

console.log({ s: solution('h1', 'g2'), exp: false });
