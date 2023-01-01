<template>
  <h2>Props Child</h2>
  <div>props.child: {{ props.child }}</div>
  <div>props.child2: {{ child2 }}</div>
</template>

<script setup lang="ts">
const props = defineProps({
  child: {
    type: String,
    default: 'default'
  },
  child2: {
    type: String,
    default: 'default'
  }
})
</script>

<style scoped>

</style>
