// Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.

// The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.

// Return the blurred image as an integer, with the fractions rounded down.

function solution(arr) {
  const rowLength = arr.length;
  const colLength = arr[0].length;
  const res = [];
  for (let row = 1; row < rowLength - 1; row += 1) {
    const rowArr = [];
    for (let col = 1; col < colLength - 1; col += 1) {
      const rowCalc = Math.floor((
      arr[row - 1][col -1] + arr[row - 1][col] + arr[row - 1][col + 1] +
      arr[row][col -1] + arr[row][col] + arr[row][col + 1] +
      arr[row + 1][col -1] + arr[row + 1][col] + arr[row + 1][col + 1]
      ) / 9);
      rowArr.push(rowCalc);
    }
    res.push(rowArr);
  }
  return res;
}
