function getNeighbors(row, col, graph) {
  // Check top
  // Check bottom
  // Check left
  // Check right
  // Return neighbors
  // Your code here
  const n = new Array();
  if (col > 0 && graph[row][col - 1]) {
    n.push([row, col - 1]);
  }

  if (col < graph[0].length - 1 && graph[row][col + 1]) {
    n.push([row, col + 1]);
  }

  if (row > 0 && graph[row - 1][col]) {
    n.push([row - 1, col]);
  }

  if (row < graph.length - 1 && graph[row + 1][col]) {
    n.push([row + 1, col]);
  }
  return n
}


function islandSize(row, col, graph) {
  // Create a visited set to store visited nodes
  // Create a stack, put the starting node in the stack
  // Put the stringified starting node in visited
  // Initialize size to 0
  // While the stack is not empty,
    // Pop the first node
    // DO THE THING (increment size by 1)
    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
  // return size
  // Your code here
  let size = 0;
  let visited = new Set([[row, col].toString()]);
  let stack = [[row, col]];
  while(stack.length){
    let curr = stack.pop();
    let n = getNeighbors(curr[0], curr[1], graph);
    if(graph[curr[0]][curr[1]] === graph[row][col]) size++;
    n.forEach(i => {
      if(!visited.has(i.toString())){
        stack.push(i);
        visited.add(i.toString())
      }
    })
  } return size;
}

module.exports = [getNeighbors, islandSize];