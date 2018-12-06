<template>
  <nav vertical class="navbar-dark">
    <ul class="navbar-nav">
      <li class="nav-item">
        <div v-if="state.currentUser !== null">
        <router-link class="btn btn-outline-dark" exact-active-class="active" to="/profile">Your Profile</router-link>
        </div>
      </li>
      <li class="nav-item">
        <div v-if="state.currentUser !== null">
        <router-link class="btn btn-outline-dark" exact-active-class="active" to="/calories">Your Calories</router-link>
        </div>
      </li>
      <li class="nav-item">
        <div v-if="state.currentUser !== null">
        <router-link class="btn btn-outline-dark" exact-active-class="active" to="/workouts">Your Workouts</router-link>
        </div>
      </li>

      <li class="nav-item">
        <div v-if="state.currentUser === null">
          <a @click.prevent="login" class="btn btn-outline-primary" :class="{disabled: state.currentUser !== null}">Sign In</a>
        </div>
      </li>
    </ul>
    </nav>

</template>

<style lang="scss">
@import "C:/Users/mike6/Desktop/Hw/WP/fitnessing/node_modules/bootstrap/scss/bootstrap.scss";
//@import "C:/Users/Michael/Desktop/HW/WP/Fitnessing/node_modules/bootstrap/scss/bootstrap.scss";

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

</style>

<script>
import * as api from '@/services/api_access';
import * as fb from '@/services/facebook';

// eslint-disable-next-line
let loopTimer = null;
export default {
    data(){
        return {
            state: {
                currentUser: null,
                users: []
            },
        }
    },
     created(){
        loopTimer = setInterval(this.refresh, 1000);
    },
    methods: {
        refresh(){
            api.GetState()
            .then(x=> this.state = x)
        },
        getFBPictures(){
            fb.GetPhotos( photos => this.fbPictures = photos.data );
        },
        login() {
            fb.FBLogin();
        },
        userId: ()=> api.userId
    },
}
</script>