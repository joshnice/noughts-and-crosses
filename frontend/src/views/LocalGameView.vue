<script setup lang="ts">
import { useRoute } from "vue-router";
import { useGameStore } from "../state/game-store";
import ScoreComponent from "../components/game/ScoreComponent.vue";
import GridComponent from "../components/game/GridComponent.vue";


const route = useRoute();
const gameStore = useGameStore();

gameStore.newGame();

const playerOneId = 1;
const playerTwoId = 2;

</script>

<template>
  <h1>Local Game Page</h1>
  <ScoreComponent :playerId="playerOneId"/>
    <GridComponent />
  <ScoreComponent :playerId="playerTwoId"/>
</template>
