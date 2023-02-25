<template>
  <h1>Props</h1>
  <props-child
      child="updated"
      child2="updated"
      :count="count"
      v-model:count2="propsService.count2.value"
  />
</template>

<script setup lang="ts">
import {Ref} from "vue"
import {setupProps} from "~/service/Props"

const propsService = setupProps()

const count: Ref<Number> = ref(0)
count.value = 100
</script>

<style scoped>

</style>
