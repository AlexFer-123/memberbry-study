<template>

  <div id="app">
    
    <headerPages />
    
    <div class="container">
      <div class="row">
        <div class="col-12 home justify-content-center align-items-center d-flex flex-column">
          <h1 class="text-center display-5 text-light text-home">Welcome to <br/><strong class="display-1">ALMember</strong></h1>
          <p>The better solution for your infoprodutc</p>
        </div>
      </div>
    </div>
    
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
