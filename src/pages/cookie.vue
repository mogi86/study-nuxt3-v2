<template>
  <button @click="update">Cookie Update</button>
</template>

<script setup lang="ts">
import {useCookie} from "#app";
import {useTestStore} from "~/stores/testStore";

// console.log output 'value1= initial' when first access.
// console.log output 'value2= initial' and 'value3= initial' when first pushing button.

// readme
// What want to make sure of in this component is that it cannot useCookie to manage state within a single request.
// On the other hand, I'd like to show that It's possible to manage the state within a single request by using pinia.
useCookie('test').value = 'initial'
console.log('value1=', useCookie('test').value)
const testStore = useTestStore()
testStore.update('initial')
console.log('store1=', testStore.test)

async function update () {
  // cannot manage to state
  useCookie('test').value = 'first updated'
  console.log('value2=', useCookie('test').value)
  useCookie('test').value = 'second updated'
  console.log('value3=', useCookie('test').value)

  // can manage to state
  testStore.update('first updated')
  console.log('store2=', testStore.test)
  testStore.update('second updated')
  console.log('store3=', testStore.test)
}
</script>

<style scoped>

</style>
