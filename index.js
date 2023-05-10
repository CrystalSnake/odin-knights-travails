function createBoard(size = 8) {
  const chessBoard = [];
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      chessBoard.push({ x: i, y: j });
    }
  }
  return chessBoard;
}
const board = createBoard();
console.log(board);

function knightMoves(startX, startY, destX, destY, size = 8) {
  const moves = [
    { x: -2, y: -1 },
    { x: -1, y: -2 },
    { x: 1, y: -2 },
    { x: 2, y: -1 },
    { x: -2, y: 1 },
    { x: -1, y: 2 },
    { x: 1, y: 2 },
    { x: 2, y: 1 },
  ];
  const queue = [];
  queue.push([{ x: startX, y: startY }]);
  console.log('Queue:');
  for (let i of queue) {
    console.log(i);
  }
  const visited = [];
  visited.push([{ x: startX, y: startY }]);
  console.log('Visited:');
  for (let v of visited) {
    console.log(v);
  }
}

knightMoves(0, 0, 1, 2, (size = 8));
