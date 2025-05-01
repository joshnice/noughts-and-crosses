<script setup>
import { Button, Dialog, InputText } from "primevue";

const { show } = defineProps({ show: Boolean });

const emit = defineEmits(["onClose"]);

function onCloseClicked() {
	emit("onClose");
}

console.log("Show", show);
</script>

<template>
    <Dialog :visible="show" @update:visible="onCloseClicked">
        <slot></slot>
    </Dialog>
</template>
