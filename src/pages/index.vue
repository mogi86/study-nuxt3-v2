<template>
  <h1>Top Page</h1>
  <div>
    <display-list :animals="animals" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {Animal} from "@/type/animal"
import displayList from "@/components/displayList.vue";

export default defineComponent({
  components: {
    displayList
  },
  setup () {
    const animals: Animal[] = [{
      id: 1,
      name: 'Dog',
      addedProcess: process.client ? 'client' : 'server'
    }]

    animals.push({
      id: 2,
      name: 'Cat',
      addedProcess: process.client ? 'client' : 'server'
    })

    if (process.server) {
      animals.push({
        id: 3,
        name: 'Bird',
        addedProcess: process.client ? 'client' : 'server'
      })
    }

    return {
      animals
    }
  }
})
</script>

<style scoped>

</style>
