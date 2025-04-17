export function moveRover(startX, startY, startDir, commands, obstacles = []) {
  let x = startX
  let y = startY
  let dir = startDir.toUpperCase()
  const maxGrid = 200
  const directions = ['N', 'E', 'S', 'W']
  const obstaclesSet = new Set(obstacles.map(o => `${o.x},${o.y}`))

  const moveForward = () => {
    let nextX = x
    let nextY = y
    if (dir === 'N') nextY += 1
    else if (dir === 'S') nextY -= 1
    else if (dir === 'E') nextX += 1
    else if (dir === 'W') nextX -= 1

    // Detectar si el siguiente paso tiene un obstáculo o está fuera del mapa
    if (
      nextX < 0 || nextX >= maxGrid ||
      nextY < 0 || nextY >= maxGrid ||
      obstaclesSet.has(`${nextX},${nextY}`)
    ) {
      return { blocked: true, obstacleAt: { x: nextX, y: nextY } }
    }

    x = nextX
    y = nextY
    return { blocked: false }
  }

  for (const command of commands.toUpperCase()) {
    if (command === 'F') {
      const result = moveForward()
      if (result.blocked) {
        return {
          x,
          y,
          dir,
          blocked: true,
          obstacleAt: result.obstacleAt
        }
      }
    } else if (command === 'L') {
      dir = directions[(directions.indexOf(dir) + 3) % 4]
    } else if (command === 'R') {
      dir = directions[(directions.indexOf(dir) + 1) % 4]
    }
  }

  return { x, y, dir, blocked: false }
}
