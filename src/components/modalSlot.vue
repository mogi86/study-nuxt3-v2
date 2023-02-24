<template>
  <button @click="change">toggle modal</button>
  <teleport to="#teleport-target">
    <div v-if="isShow" id="myModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="change">&times;</span>
        <p>modal content</p>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import {ref} from "vue";

const isShow = ref(false)

function change () {
  isShow.value = !isShow.value
}
</script>

