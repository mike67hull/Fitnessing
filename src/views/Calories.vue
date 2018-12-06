<template>
  <div class="calories">
    <div class="jumbotron">
            <h1 class="display-4">{{state.currentUser.name}}'s Calorie Management</h1>
            <hr class="my-4">
            <h5>Your recommended calories to maintain weight: {{state.currentUser.recCalories}}</h5>
            <h5>Your current calories for the day: {{state.currentUser.calories}}</h5>
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
            currentUser: null
        }
    },
     created(){
        loopTimer = setInterval(this.refresh, 1000);
    },
    methods: {
        refresh(){
            api.GetState()
            .then(x=> this.state = x);
            //api.getFriends()
            //.then(x=> this.myFriends = x.friends)
        },
        login() {
            fb.FBLogin();
        },
        userId: ()=> api.userId
    },
}

</script>