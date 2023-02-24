<template>
  <h1>Emit Parent</h1>
  <emit-slot>
    <emit-child @debug="debug" />
  </emit-slot>
</template>

<script setup lang="ts">
function debug () {
  console.log('debug function is called!!')
}
</script>
