<script setup lang="ts">
import { ref } from "vue";
import { Button } from "primevue";
import RadioButtonsComponent from "../user-interface/RadioButtonsComponent.vue";

type GameType = "online" | "offline";

const emit = defineEmits<{
  (e: 'onCancel'): void
  (e: 'onCreate', type: GameType): void
}>()

const items: { id: GameType, label: string }[] = [{ id: 'offline', label: 'Offline' }, { id: 'online', label: 'Online' }];
const selectedValue = ref<GameType>("offline");

function handleGameModeChange(value: GameType) {
  selectedValue.value = value;
}

</script>

<template>
  <div class="container">
    <h4>Select type</h4>
    <RadioButtonsComponent @change="(value) => handleGameModeChange(value)" :items="items" :selected-value="selectedValue" />
    <div class="buttons-container">
      <Button @click="emit('onCancel')">Cancel</Button>
      <Button @click="emit('onCreate', selectedValue)">Create</Button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.buttons-container {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}
</style>
