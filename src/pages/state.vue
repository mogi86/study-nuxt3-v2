<template>
  <h1>State</h1>
  <div>state1: {{ state1 }}</div>
  <button @click="state1++">increment state1</button>
  <div>
    <p>
      According to document ( https://nuxt.com/docs/getting-started/state-management#best-practices ), <br>
      ref() that defined outside of &lt;script setup&gt; is shared other session. <br>
      So, I confirmed by preparing "state2" that defined outside of &lt;script setup&gt;. <br>
      However, there is no shared state.
    </p>
  </div>
  <div>state2: {{ result.state2 }}</div>
  <button @click="incrementState2">increment state2</button>
</template>

<script setup lang="ts">

import {setupState} from "~/service/State";

const state1 = ref(0)
state1.value = 100

const result = setupState()

function incrementState2 () {
  result.increment()
}

</script>

<style scoped>

</style>
