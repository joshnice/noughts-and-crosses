<script setup lang="ts">
import { ref, watch } from "vue";
import { useGameStore } from "../../state/game-store";

interface Props {
  playerId: 1 | 2;
  className?: string;
}

const { playerId, className } = defineProps<Props>();

const gameStore = useGameStore();

const playerScore = ref(gameStore.getPlayerScore(playerId));

watch(() => gameStore.getPlayerScore(playerId), (updatedPlayerScore) => {
  playerScore.value = updatedPlayerScore;
})

</script>

<template>
  <div class="score-container">
    <h3 :class="className">Player {{ playerId }} </h3>
    <h3> {{ gameStore.getPlayerScore(playerId) }} </h3>
  </div>
</template>

<style scoped>

.score-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>