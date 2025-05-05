<script setup lang="ts">
</script>

<template>
  <RouterView />
</template>

<style>
  *{
    box-sizing: content-box;
  }

  html {
    height: 100vh;
    width: 100vw;
  }

  body {
    height: 100%;
    width: 100%;
    margin: 0px;
    
  }

  #app {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0px;
  }

  *{
    font-family: system-ui;
  }

</style>
