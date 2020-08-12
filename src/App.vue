<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 60px; */
}

html {
  overflow: hidden;
  height: 100%;
}

body {
  height: 100%;
  overflow: auto;
  margin: 0;
  background-image: url(assets/background.png);
  background-size: contain;
}
</style>
