function knightMoves(startIn, endIn) {
  const start = { x: startIn[0], y: startIn[1], prev: null };
  const end = { x: endIn[0], y: endIn[1] };
  const queue = [start];
  const visitedPos = [];

  const isVisited = (target) => {
    return visitedPos.some((visit) => visit.x === target.x && visit.y === target.y);
  };

  const moveNext = (pos) => {
    const x1neg = pos.x - 1;
    const x2neg = pos.x - 2;
    const x1pos = pos.x + 1;
    const x2pos = pos.x + 2;

    const y1neg = pos.y - 1;
    const y2neg = pos.y - 2;
    const y1pos = pos.y + 1;
    const y2pos = pos.y + 2;

    if (x1neg >= 0) {
      const coordA = { x: x1neg, y: y2neg, prev: pos };
      const coordB = { x: x1neg, y: y2pos, prev: pos };

      if (y2neg >= 0 && !isVisited(coordA)) {
        queue.push(coordA);
      }
      if (y2pos <= 7 && !isVisited(coordB)) {
        queue.push(coordB);
      }
    }

    if (x2neg >= 0) {
      const coordA = { x: x2neg, y: y1neg, prev: pos };
      const coordB = { x: x2neg, y: y1pos, prev: pos };

      if (y1neg >= 0 && !isVisited(coordA)) {
        queue.push(coordA);
      }
      if (y1pos <= 7 && !isVisited(coordB)) {
        queue.push(coordB);
      }
    }

    if (x1pos <= 7) {
      const coordA = { x: x1pos, y: y2neg, prev: pos };
      const coordB = { x: x1pos, y: y2pos, prev: pos };

      if (y2neg >= 0 && !isVisited(coordA)) {
        queue.push(coordA);
      }
      if (y2pos <= 7 && !isVisited(coordB)) {
        queue.push(coordB);
      }
    }

    if (x2pos <= 7) {
      const coordA = { x: x2pos, y: y1neg, prev: pos };
      const coordB = { x: x2pos, y: y1pos, prev: pos };

      if (y1neg >= 0 && !isVisited(coordA)) {
        queue.push(coordA);
      }
      if (y1pos <= 7 && !isVisited(coordB)) {
        queue.push(coordB);
      }
    }
  };

  while (queue.length > 0) {
    const currentPosition = queue.shift();
    visitedPos.push(currentPosition);

    if (currentPosition.x === end.x && currentPosition.y === end.y) {
      function traverse(pos) {
        if (!pos) return [];

        return [...traverse(pos.prev), [pos.x, pos.y]];
      }

      return traverse(currentPosition);
    }

    moveNext(currentPosition);
  }
}

console.log(knightMoves([0, 0], [7, 7]));
