<script setup lang="ts">
import { RadioButton } from "primevue";
import { ref } from "vue";

interface Item {
	id: string;
	label: string;
}

interface Props {
	items: Item[];
    selectedValue: string;
}

interface Emits {
    (e: 'change', id: string): void
}

const props = defineProps<Props>();

const selectedValue = ref(props.selectedValue)

const emit = defineEmits<Emits>();

</script>

<template>
    <div v-for="item in props.items" :key="item.id">
        <div>
            <RadioButton v-model="selectedValue" v-on:value-change="(value) => emit('change', value)" :inputId="item.id" name="dynamic" :value="item.id"/>
            <label>{{ item.label }}</label>
        </div>
    </div>
</template>

<style>
.container {
    display: flex;
    gap: 10px;
    flex-direction: column;
}

.radio-and-label {
    display: flex;
    gap: 10px;
}
</style>
