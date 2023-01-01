<template>
  <h2>v-model Child</h2>
  <div>
    <input
        type="text"
        :value="child"
        @input="$emit('update:child', $event.target.value)"
    >
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  child: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>

</style>
