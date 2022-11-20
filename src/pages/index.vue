<template>
  <h1>Index Page!</h1>
</template>

<script lang="ts">
import {set} from "~/service/SetCookie";
import {defineComponent} from "vue";
import {useCookie} from "#app";

export default defineComponent({
  setup () {
    console.log('step-1')

    async function hoge () {
      console.log('step-2')
      await set()
      console.log('step-3')
    }
    hoge()
    console.log('step-4')

    console.log(useCookie('hoge').value)

    return {
      hoge
    }
  }
})
</script>

<style scoped>

</style>
