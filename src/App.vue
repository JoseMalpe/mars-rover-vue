<script setup>
import { ref } from 'vue'
import { moveRover } from './roverEngine'
import Grid from './components/Grid.vue'

const x = ref(0)
const y = ref(0)
const direction = ref('N')
const commands = ref('')
const result = ref(null)

const gridSize = 10

const obstacles = ref([
  { x: 3, y: 4 },
  { x: 1, y: 1 },
  { x: 7, y: 2 }
])

const execute = () => {
  const res = moveRover(x.value, y.value, direction.value, commands.value, obstacles.value)
  result.value = res
  x.value = res.x
  y.value = res.y
  direction.value = res.dir
}
</script>

<template>
  <div class="p-4 max-w-xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">🚀 Mars Rover Mission</h1>

    <div class="mb-4">
      <label>X:</label>
      <input type="number" v-model="x" class="border p-1 mx-2" />
      <label>Y:</label>
      <input type="number" v-model="y" class="border p-1 mx-2" />
      <label>Dir:</label>
      <input v-model="direction" class="border p-1 mx-2" placeholder="N/E/S/W" />
    </div>

    <div class="mb-4">
      <label>Commands:</label>
      <input v-model="commands" class="border p-1 w-full" placeholder="FFRFFL" />
    </div>

    <button @click="execute" class="bg-blue-600 text-white px-4 py-2 rounded">Run</button>

    <div class="mt-6 flex justify-center">
      <Grid :rover="{ x, y }" :obstacles="obstacles" :size="gridSize" />
    </div>

    <div v-if="result" class="mt-4 bg-gray-100 p-4 rounded">
      <p><strong>Final Position:</strong> {{ result.x }}, {{ result.y }}, {{ result.dir }}</p>
      <p v-if="result.blocked" class="text-red-600">🚧 Obstacle encountered at {{ result.obstacleAt.x }}, {{ result.obstacleAt.y }}</p>
    </div>
  </div>
</template>
