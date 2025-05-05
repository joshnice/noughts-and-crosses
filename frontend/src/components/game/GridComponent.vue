<script setup lang="ts">
import { useGameStore } from '../../state/game-store';
import CellComponent from "./CellComponent.vue";

interface Props {
    className?: string
}

const props = defineProps<Props>();

const gameStore = useGameStore();

</script>

<template>
    <div :class="`${props.className} game-board`">
        <div v-for="x in gameStore.gridXSize">
            <div v-for="y in gameStore.gridYSize">
                <CellComponent :x="x - 1" :y="y - 1"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.game-board {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
}
</style>