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
import {LocationQueryRaw, stringifyQuery} from "vue-router";

const route = useRoute()
const { data } = await useFetch(`/api/content`, {
  params: {
    name: route.query.name
  }
})
console.log('content.data=', data.value)

async function display () {
  const query: LocationQueryRaw = {
    name: 'item-list'
  }
  const queryStrings = stringifyQuery(query)
  await navigateTo({
    path: `http://localhost:3000/content/?name=item-list?${queryStrings}`
  }, {
    external: true
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
