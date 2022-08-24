<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12 home">
          <headerPages />
          <h1 class="text-center display-1 text-light">Welcome to ALMember</h1>
          <footerPages />
        </div>
      </div>
    </div>
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
