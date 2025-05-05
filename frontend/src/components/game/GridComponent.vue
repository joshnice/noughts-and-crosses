<script setup ="ts">
import { onMounted } from "vue";
import { useGameStore } from '../../state/game-store';
import CellComponent from "./CellComponent.vue";

const gameStore = useGameStore();

</script>

<template>
    <div class="game-board">
        <div v-for="x in gameStore.gridXSize">
            <div v-for="y in gameStore.gridYSize">
                <CellComponent :x="x - 1" :y="y - 1"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.game-board {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
}
</style>