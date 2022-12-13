<template>
  <h1>Multiple Async</h1>
</template>

<script setup lang="ts">
import {callMultipleApi, callMultipleApiViaFunc} from "~/service/Async";

// nuxt instance unavailable
await callMultipleApi()
</script>

<style scoped>

</style>
