<template>
  <h2>Props Child</h2>
  <div>props.child: {{ props.child }}</div>
  <div>props.child2: {{ child2 }}</div>
  <div>props.count: {{ props.count }}</div>
  <div>props.count2: {{ props.count2 }}</div>
  <div>
    <button @click="updateCount2">count2 update</button>
  </div>
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
  },
  count: {
    type: Number,
    default: 0
  },
  count2: {
    type: Number,
    default: 0
  }
})

const emits = defineEmits<{(e: 'update:count2', value: Number): void }>()

function updateCount2 () {
  const localCount2 = props.count2 + 1
  emits('update:count2', localCount2)

}
</script>

<style scoped>

</style>
