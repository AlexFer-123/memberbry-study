<template>
  <div id="app">
    <headerPages />
    <h1>Olá mundo</h1>
    <footerPages />
  </div>
</template>

<script>

import headerPages from './components/header'
import footerPages from './components/footer'

export default {

  name: 'App',
  components: {
    headerPages,
    footerPages
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
