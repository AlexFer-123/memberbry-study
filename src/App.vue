<template>

  <div id="app">
    
    <headerPages />
    
    <router-view/>
    
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



</style>
