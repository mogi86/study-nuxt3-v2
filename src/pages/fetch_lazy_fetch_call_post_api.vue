<template>
  <h1>Do $fetch without blocking rendering</h1>
</template>

<script setup lang="ts">
console.log('setup start...')

import {onMounted, watch} from "@vue/runtime-core"
import {useAsyncData, useFetch, useLazyFetch} from "#app";

// it works
const { data: response } = await useLazyFetch('/api/five_second_sleep', {
  method: 'post',
  server: false
})
watch(response, () => {
  console.log('response:', response.value)
})

// it don't work
// const { data: response2 } = await useFetch('/api/five_second_sleep', {
//   method: 'post',
//   server: false
// })
// console.log('response2:', response2.value)

onMounted(async () => {
  // it works
  // await $fetch('/api/five_second_sleep', {
  //   method: 'post'
  // }).then((response3) => {
  //   console.log('response3:', response3)
  // })
  //
  // it don't works
  // await useFetch('/api/five_second_sleep', {
  //   method: 'post'
  // }).then((response4) => {
  //   console.log('response4:', response4.data.value)
  // })
  //
  // it don't works
  // await useAsyncData(() => $fetch('/api/five_second_sleep', {
  //   method: 'post'
  // })).then((response4) => {
  //   console.log('response4:', response4.data.value)
  // })
})
console.log('setup end...')
</script>

<style scoped>

</style>
