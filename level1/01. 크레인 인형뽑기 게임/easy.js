const transpose = reduce;

function reduce(matrix) {
  matrix.reduce(reducer(result, row), []);
}
function reducer(result, row) {
  row.map((_, i) => [...(result[i] || [])], row[i]);
}

const solution = (board, moves) => {
  const stacks = transpose(board);
  console.log(stacks);
};

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let board_1 = [
  [3, 4],
  [5, 2, 2],
  [1, 4, 5, 1],
  [3, 4],
  [1, 2, 1, 3],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];
solution(board, moves);
