<script setup>
import RadioButtonComponent from "../user-interface/RadioButtonComponent.vue";
</script>

<template>
  <div>
    <label>Select type</label>
    <RadioButtonComponent value="Offline" label="Offline" />
    <RadioButtonComponent value="Online" label="Online" />
  </div>
</template>
