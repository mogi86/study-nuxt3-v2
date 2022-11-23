<template>
  <h1>Index Page!</h1>
</template>

<script setup lang="ts">
import {getHello, getHello2} from "~/service/Hello";

//-------
// no error
//-------
// await getHello()
// await getHello2()

//-------
// no error
//-------
Promise.all([
  getHello(),
  getHello2()
])

</script>

<style scoped>

</style>
