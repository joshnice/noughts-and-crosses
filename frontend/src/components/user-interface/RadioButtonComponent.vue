<script setup>
const { label, value } = defineProps({ label: String, value: String });
</script>

<template>
    <div class="container">
        <RadioButton value=":value" />
        <label>{{ label }}</label>
    </div>
</template>

<style>
.container {
    display: flex;
    gap: 10px;
}
</style>
