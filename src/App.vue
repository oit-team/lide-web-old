<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import pkg from '../package.json'
console.log(pkg)

export default {
  name: 'app',
  created() {
    if (window.performance.navigation.type === 1) {
      this.$router.replace({
        path: '/',
      })
    }
  }
}
</script>

<style lang="scss">
html, body {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  font-size: 13px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
