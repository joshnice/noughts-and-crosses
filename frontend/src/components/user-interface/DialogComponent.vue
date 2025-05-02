<script setup lang="ts">
import { Dialog } from "primevue";

interface Props {
    show: boolean;
    header: string
}

const { show, header } = defineProps<Props>();

const emit = defineEmits(["onClose"]);

</script>

<template>
    <Dialog :visible="show" :header="header" @update:visible="emit('onClose')">
        <slot></slot>
    </Dialog>
</template>
