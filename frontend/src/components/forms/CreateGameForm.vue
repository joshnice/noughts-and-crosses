<script setup lang="ts">
import { ref } from "vue";
import RadioButtonsComponent from "../user-interface/RadioButtonsComponent.vue";

const items = [{ id: 'offline', label: 'Offline' }, { id: 'online', label: 'Online' }];
const selectedValue = ref("offline");

function handleGameModeChange(value: string) {
  selectedValue.value = value;
}

</script>

<template>
  <div>
    <label>Select type</label>
    <RadioButtonsComponent @change="handleGameModeChange" :items="items" :selected-value="selectedValue" />
  </div>
</template>
