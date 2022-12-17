<template>
  <h1>Call API from client side</h1>
</template>

<script setup lang="ts">
import {onMounted} from "@vue/runtime-core";
import {useAsyncData, useCookie} from "#app";

onMounted(async () => {
  // response1 is 'undefined'
  // const { data: response1 } = await useAsyncData(() => $fetch('/api/hello', {
  //   method: 'post'
  // }))

  await $fetch('/api/hello', {
    method: 'post'
  }).then((response1) => {
    console.log('response1:', response1)
  })

  const { data: response2 } = await useAsyncData(() => $fetch('/api/hello', {
    method: 'get'
  }))
  console.log('response2:', response2.value)
})
</script>

<style scoped>

</style>
