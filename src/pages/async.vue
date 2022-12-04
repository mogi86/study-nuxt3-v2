<template>
  <h1>Async</h1>
</template>

<script setup lang="ts">
import {get} from "~/service/RappedAsyncData";
import {useCookie} from "#app";
import {synchronizeToStorage} from "~/service/Async";

await synchronizeToStorage()

// const { data } = await get('/api/hello')
// console.log(data.value)
// useCookie<any>('async').value = data.value
</script>

<style scoped>

</style>
