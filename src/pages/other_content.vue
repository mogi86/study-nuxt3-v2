<template>
  <h1>Other Content Page</h1>
</template>

<script setup lang="ts">
import {useFetch, useRoute} from "#app";

const route = useRoute()
const { data } = await useFetch(`/api/content`, {
  params: {
    name: route.query.name
  }
})
console.log('other_content.data=', data.value)
</script>

<style scoped>

</style>
