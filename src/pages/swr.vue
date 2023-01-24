<template>
  <h1>swr</h1>
  <div>
    <p>{{ response }}</p>
  </div>
</template>

<script setup lang="ts">
import {useFetch} from "#app";
import {ref} from "vue";

const response = ref('')
const { data } = await useFetch('/api/five_second_sleep', {
  method: 'get',
})
response.value = data.value || 'NO DATA'
</script>

<style scoped>

</style>
