<script setup lang="ts">
import { defineProps, ref, watch } from "vue";
import { useGameStore } from '../../state/game-store';

interface Props {
    x: number;
    y: number;
}

const props = defineProps<Props>();

const gameStore = useGameStore();

const value = ref(gameStore.gridValue[props.x][props.y]);

watch(() => gameStore.gridValue[props.x][props.y], (updatedValue) => {
    value.value = updatedValue;
})

function handleCellClicked() {
    gameStore.playerSetValue(props.x, props.y);
}

</script>

<template>
    <div>
        <div v-if="value === 1">X</div>
        <div v-else-if="value === 2">0</div>
        <button v-else @click="handleCellClicked">Click me</button>
    </div>
</template>
