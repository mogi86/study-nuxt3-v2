<template>
  <h1>v-model</h1>
  <div>
    <input type="text" v-model="content">
  </div>
  <div>
    <button @click="change">Change</button>
  </div>
  <div>
    <v-model-child v-model:child="content" />
  </div>
</template>

<script setup lang="ts">
import {ref} from "@vue/runtime-core";
import VModelChild from "~/components/vModelChild.vue";

const content = ref('')

function change () {
  content.value = 'changed'
}
</script>

<style scoped>

</style>
