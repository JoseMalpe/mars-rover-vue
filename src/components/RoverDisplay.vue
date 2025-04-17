<template>
    <div>
      <h2>Rover Final Position</h2>
      <p v-if="position">{{ position }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    position: String
  })
  </script>