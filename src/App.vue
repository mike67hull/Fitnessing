<template>
<div>
    <div class="display-4">
      <img alt="Vue logo" src="./assets/fit-logo.png" id="logo">
      FITNESSING
      </div>
      <Nav />
      <div id="app" class="container">
      
    <router-view/>
  </div>
  
</div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
#logo { height: 50px;
padding-left:10px;
padding-bottom: 10px;
padding-right: 0px;}
.container{
  width: 100%;
  top: 0px;
}
</style>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'

export default {
  name: 'home',
  components: {
    Nav
  }
}
</script>
