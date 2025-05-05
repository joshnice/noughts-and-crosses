<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import CreateGameForm from "../components/forms/CreateGameForm.vue";
import DialogComponent from "../components/user-interface/DialogComponent.vue";
import type { GameType } from "../types/game";

const router = useRouter();

const showCreateNewGameModal = ref(false);

function createNewGame() {
	showCreateNewGameModal.value = true;
}

function onCreateNewGameModalClosedClicked() {
	showCreateNewGameModal.value = false;
}

function onCreateNewGameSubmited(gametype: GameType) {
  showCreateNewGameModal.value = false;
  switch (gametype) {
    case "local":
      router.push(`local-game/${crypto.randomUUID()}`);
      break;
    default:
      throw new Error(`${gametype} not handled`);
  }
}

</script>

<template>
  <h1>Home Page</h1>
  <button @click="createNewGame">Create new game</button>
  <DialogComponent :show="showCreateNewGameModal" @onClose="onCreateNewGameModalClosedClicked" header="Create a new game">
      <CreateGameForm @onCancel="onCreateNewGameModalClosedClicked" @onCreate="onCreateNewGameSubmited" />
  </DialogComponent>
</template>
