<template>
<div>
  <div class = "topbar">
    <h1>FITNESSING</h1>
    <Nav />
  </div>
    <div id="app" class="container">
      <router-view/>
    </div>
</div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
.topbar{
  top:0px;
  background-color: #888888;
  height: 60px;
  width:100%;
  padding-left: 10px;
  padding-top: 10px;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  position:fixed;
}

.container{
  margin-left: 220px;
  width: 100%;
  margin-top: 75px;
  
}
</style>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import '@/services/facebook';
export default {
  name: 'home',
  components: {
    Nav
  }
}
</script>
