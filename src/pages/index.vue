<template>
  <h1>Top Page</h1>
  <div>
    Process is {{ currentProcess }}
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  setup () {
    return {
      currentProcess: process.client ? 'client' : 'server'
    }
  }
})
</script>

<style scoped>

</style>
