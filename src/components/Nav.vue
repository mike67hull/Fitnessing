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
    <!--
  <nav tabs vertical class="w-10">
    <nav-item active><router-link class="nav-link" exact-active-class="active" to="/">Home</router-link></nav-item>
    <nav-item><router-link class="nav-link" exact-active-class="active" to="/about">About</router-link></nav-item>
    <nav-item><router-link class="nav-link" exact-active-class="active" to="/game">Game</router-link></nav-item>
  </nav>-->

</template>

<style lang="scss">
.navbar-nav {
    
    height: 50%;
    width: 240px;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: rgba(11, 31, 9, 0.6);
    overflow-x: hidden;
    padding-top: 20px;
    padding-left: 20px;
}

</style>