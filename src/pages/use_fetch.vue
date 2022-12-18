<template>
  <h1>useFetch</h1>
  <div v-if="pending">Loading...</div>
  <div v-else>{{ data }}</div>
</template>

<script setup lang="ts">
import {useFetch} from "#app";

const { data, pending } = await useFetch('/api/five_second_sleep', {
  method: 'get',
  server: false
})
</script>

<style scoped>

</style>
