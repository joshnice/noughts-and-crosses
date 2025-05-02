<script setup lang="ts" generic="TItemId extends string">
import { RadioButton } from "primevue";
import { ref } from "vue";

interface Item {
	id: TItemId;
	label: string;
}

interface Props {
	items: Item[];
    selectedValue: string;
}

interface Emits {
    (e: 'change', id: TItemId): void
}

const props = defineProps<Props>();

const selectedValue = ref(props.selectedValue)

const emit = defineEmits<Emits>();

</script>

<template>
    <div class="container">
        <div  v-for="item in props.items" :key="item.id" class="radio-and-label">
            <RadioButton v-model="selectedValue" v-on:value-change="(value) => emit('change', value)" :inputId="item.id" name="dynamic" :value="item.id"/>
            <label>{{ item.label }}</label>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.radio-and-label {
    display: flex;
    gap: 10px;
}
</style>
flex-direction: column;
