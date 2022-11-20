<template>
  <h1>Index Page!</h1>
</template>

<script setup lang="ts">
import {set} from "~/service/SetCookie";

async function hoge () {
  set()
}
await hoge()
</script>

<style scoped>

</style>
