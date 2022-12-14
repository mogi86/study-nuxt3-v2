<template>
  <h1>Call API from client side</h1>
</template>

<script setup lang="ts">
import {onMounted} from "@vue/runtime-core";
import {useAsyncData, useCookie} from "#app";

onMounted(async () => {
  const { data: response1 } = await useAsyncData(() => $fetch('/api/hello', {
    method: 'post'
  }))
  // response1 is 'undefined'
  console.log('response1:', response1.value)

  const { data: response2 } = await useAsyncData(() => $fetch('/api/hello', {
    method: 'get'
  }))
  console.log('response2:', response2.value)
})
</script>

<style scoped>

</style>
