let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const transpose = (matrix) =>
  matrix.reduce((result, row) => row.map((_, i) => [...(result[i] || []), row[i]]), []);

const solution = (board, moves) => {
  console.log(transpose(board));
  const stacks = transpose(board).map((row) => row.reverse().filter((el) => el !== 0));
  console.log(stacks);
  const basket = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }

  return result;
};

let stacks = [
  [3, 4],
  [5, 2, 2],
  [1, 4, 5, 1],
  [3, 4],
  [1, 2, 1, 3],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];
solution(board, moves);
