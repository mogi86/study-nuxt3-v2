<template>
  <h2>Emit Child</h2>
  <div>
    <button @click="execute">emit実行</button>
  </div>
</template>

<script setup lang="ts">
import {useAsyncData} from "#app";

const emits = defineEmits<{(e: 'debug'): void }>()

async function execute () {
  await useAsyncData(() => $fetch('/api/hello', {
    method: 'get'
  })).then(async () => {
    await useAsyncData(() => $fetch('/api/hello', {
      method: 'post'
    }))
    await useAsyncData(() => $fetch('/api/hello', {
      method: 'post'
    }))

    emits('debug')
  })
}
</script>
