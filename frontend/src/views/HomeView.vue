<script setup>
import { ref } from "vue";

console.log("Home page has mounted");
const showCreateNewgGameModal = ref(false);

function createNewGame() {
	showCreateNewgGameModal.value = !showCreateNewgGameModal.value;
}
</script>

<template>
  <h1>Home Page</h1>
  <button @click="createNewGame">Create new game</button>
  <div v-if="showCreateNewgGameModal">
      Create a new game
  </div>
</template>
