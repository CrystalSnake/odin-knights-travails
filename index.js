class Cell {
  constructor(x, y, distance = 0, route = '') {
    this.x = x;
    this.y = y;
    this.distance = distance;
    this.route = route;
  }
}

function isOnBoard(x, y, size = 8) {
  if (x > 0 && x < size && y > 0 && y < size) return true;
  return false;
}

function knightMoves(start, dest, size = 8) {
  const dx = [-2, -1, 1, 2, -2, -1, 1, 2];
  const dy = [-1, -2, -2, -1, 1, 2, 2, 1];

  const queue = [];
  queue.push(new Cell(start[0], start[1], 0, `${start[0]},${start[1]}`));

  const visited = new Array(size);
  for (let i = 0; i < size; i++) {
    visited[i] = new Array(size);
    for (let j = 0; j < size; j++) {
      visited[i][j] = false;
    }
  }
  visited[start[0]][start[1]] = true;

  let current;
  let x, y;

  while (queue.length != 0) {
    current = queue.shift();
    if (current.x == dest[0] && current.y == dest[1])
      return [current.distance, current.route];
    for (let i = 0; i < 8; i++) {
      x = current.x + dx[i];
      y = current.y + dy[i];
      if (isOnBoard(x, y, size) && !visited[x][y]) {
        visited[x][y] = true;

        queue.push(
          new Cell(
            x,
            y,
            current.distance + 1,
            current.route.concat(`-> ${[x, y]}`)
          )
        );
      }
    }
  }
}

console.log(knightMoves([0, 1], [5, 6], (size = 8)));
