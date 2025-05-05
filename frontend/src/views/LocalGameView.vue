<script setup lang="ts">
import { useGameStore } from "../state/game-store";
import ScoreComponent from "../components/game/ScoreComponent.vue";
import GridComponent from "../components/game/GridComponent.vue";

const gameStore = useGameStore();

gameStore.newGame();

const playerOneId = 1;
const playerTwoId = 2;

</script>

<template>
  <h1>Local Game Page</h1>
  <div class="game-container">
    <ScoreComponent className="player-score" :playerId="playerOneId"/>
    <GridComponent className="game-grid" />
    <ScoreComponent className="player-score" :playerId="playerTwoId"/>
  </div>
</template>


<style scoped>
.game-container {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
}

.game-grid {
  flex-grow: 1;
  width: 70%;
}

.player-score {
  width: 15%;
}
</style>