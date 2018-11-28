<template>
  <nav vertical class="navbar-dark">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" exact-active-class="active" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" exact-active-class="active" to="/about">About</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" exact-active-class="active" to="/game">Game</router-link>
      </li>
    </ul>
    </nav>

</template>

<style lang="scss">
@import "C:/Users/mike6/Desktop/Hw/WP/fitnessing/node_modules/bootstrap/scss/bootstrap.scss";

nav {
  top: 60px;
  height: 100%;
  width: 220px;
  position: fixed;
  left: 0px;
  background-color: #888888;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;

  ul{
    padding-top:20px;
    text-align: center;
  }

  li{
    padding: 6px 12px;
    
  }
  

}
.navbar-dark .navbar-nav .nav-link {
    color:red;
  }
</style>