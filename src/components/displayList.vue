<template>
  <table border="2">
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Added Process</th>
    </tr>
    <tr v-for="animal in animals">
      <td>{{ animal.id }}</td>
      <td>{{ animal.name }}</td>
      <td>{{ animal.addedProcess }}</td>
    </tr>
  </table>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"
import {Animal} from "@/type/animal"

export default defineComponent({
  props: {
    animals: {
      type: Array as PropType<Array<Animal>>,
      default: {}
    }
  }
})
</script>

<style scoped>

</style>
