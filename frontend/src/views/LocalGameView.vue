<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute();
console.log("Local game page has mounted", route.params);
</script>

<template>
  <h1>Local Game Page</h1>
</template>
