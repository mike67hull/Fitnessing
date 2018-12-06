<template>
  <div class="workouts">
    <div class="jumbotron">
            <h1 class="display-4">{{state.currentUser.name}}'s Workout Management</h1>
            <hr class="my-4">
            <h5>The total duration of your workouts today is  {{state.currentUser.totWorkout}} minutes</h5>
            <form id="signup-form">
              <input type="text" placeholder="Workout type" v-model="wt"/>
              <input type="text" placeholder="Workout length(minutes)" v-model="wl"/>
              <button @click.prevent="addWorkout()">Add workout</button>
            </form>
    </div>
  </div>
</template>

<script>
import * as api from '@/services/api_access';
import * as fb from '@/services/facebook';

// eslint-disable-next-line
let loopTimer = null;
export default {
    data(){
        return {
            state: {
                users: []
            },
            currentUser: null,
            wt: '',
            wl: ''
        }
    },
     created(){
        loopTimer = setInterval(this.refresh, 1000);
    },
    methods: {
        refresh(){
            api.GetState()
            .then(x=> this.state = x);
        },
        login() {
            fb.FBLogin();
        },
        addWorkout(){
          api.addWorkout(this.wt, this.wl);
        },
        userId: ()=> api.userId
    },
}
</script>
