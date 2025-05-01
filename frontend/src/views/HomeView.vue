<script setup>
import { ref } from "vue";
import CreateGameForm from "../components/forms/CreateGameForm.vue";
import DialogComponent from "../components/user-interface/DialogComponent.vue";

const showCreateNewGameModal = ref(false);

function createNewGame() {
	showCreateNewGameModal.value = true;
}

function onCreateNewGameModalClosedClicked() {
	showCreateNewGameModal.value = false;
}
</script>

<template>
  <h1>Home Page</h1>
  <button @click="createNewGame">Create new game</button>
  <DialogComponent :show="showCreateNewGameModal" @onClose="onCreateNewGameModalClosedClicked">
      <CreateGameForm />
  </DialogComponent>
</template>
