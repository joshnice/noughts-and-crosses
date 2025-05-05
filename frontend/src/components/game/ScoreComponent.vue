<script setup lang="ts">
import { useGameStore } from "../../state/game-store";

interface Props {
  playerId: 1 | 2;
}

const { playerId } = defineProps<Props>();

const gameStore = useGameStore();

</script>

<template>
  <div>Player {{ playerId }} score {{ gameStore.getPlayerScore(playerId) }}</div>
</template>
