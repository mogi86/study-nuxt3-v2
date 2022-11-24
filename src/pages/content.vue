<template>
  <h1>Content Page</h1>
  <div>
    <button @click="display">Display this content</button>
  </div>
  <div>
    <button @click="displayOther">Display other content</button>
  </div>
</template>

<script setup lang="ts">
import {navigateTo, useFetch, useRoute} from "#app";

const route = useRoute()
const { data } = await useFetch(`/api/content`, {
  params: {
    name: route.query.name
  }
})
console.log('content.data=', data.value)

function display () {
  navigateTo({
    path: '/content/',
    query: {
      name: 'item-list'
    }
  })
}

function displayOther () {
  navigateTo({
    path: '/other_content/',
    query: {
      name: 'other-item-list'
    }
  })
}
</script>

<style scoped>

</style>
