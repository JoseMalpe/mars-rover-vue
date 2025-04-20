<template>
    <div class="grid" :style="gridStyle">
      <div
        v-for="(cell, index) in totalCells"
        :key="index"
        :class="getCellClass(cellX(index), cellY(index))"
      >
        <span v-if="isRoverHere(cellX(index), cellY(index))">
          🚀
        </span>
        <span v-else-if="isObstacle(cellX(index), cellY(index))">
          ⛰️
        </span>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    rover: Object, // { x, y }
    obstacles: Array, // [{ x, y }]
    size: Number // ej: 10
  })
  
  const totalCells = Array.from({ length: props.size * props.size })
  
  const cellX = (index) => index % props.size
  const cellY = (index) => Math.floor(index / props.size)
  
  const isRoverHere = (x, y) => props.rover?.x === x && props.rover?.y === y
  const isObstacle = (x, y) => props.obstacles?.some(o => o.x === x && o.y === y)
  
  const getCellClass = (x, y) => {
    return [
      'cell',
      isRoverHere(x, y) ? 'rover' : '',
      isObstacle(x, y) ? 'obstacle' : ''
    ].join(' ')
  }
  </script>
  
  <style scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
    max-width: 320px;
    gap: 2px;

  }
  .cell {
    background: #f0f0f0;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .rover {
    background-color: #008cff;
    color: white;
    font-weight: bold;
  }
  .obstacle {
    background-color: #ff5757;
    color: white;
  }
  </style>
  