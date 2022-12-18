<template>
  <h1>useFetch</h1>
  <div v-if="pending">Loading...</div>
  <div v-else>{{ res }}</div>
</template>

<script setup lang="ts">
import {useLazyFetch} from "#app"
import {ref, watch} from "@vue/runtime-core";

const { data, pending } = useLazyFetch('/api/five_second_sleep', {
  method: 'get',
  server: false
})
const res = ref('')
watch(data, (newData) => {
  res.value = data.value || ''
})
</script>

<style scoped>

</style>
