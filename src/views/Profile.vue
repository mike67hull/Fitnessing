<template>
  <div class="profile">
      <div class="jumbotron">
      <h1 class="display-4">Welcome back {{state.currentUser.name}}!</h1>
      <!--<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>-->
      <hr class="my-4">
      <a @click.prevent="setWeight()" class="btn btn-warning btn-sm" role="button">Change Weight</a>
      <h5>Your weight: {{state.currentUser.weight}}</h5>
      <a @click.prevent="setCalories()" class="btn btn-warning btn-sm" role="button">Change Calories</a>
      <h5>Your current calories for the day: {{state.currentUser.currentCalories}}</h5>
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
                currentUser: {
                    name: "",
                    id: '',
                    fbid: '',
                    weight: '',
                    currentCalories: ''
                },
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
            //.then(()=> api.GetMyCaptions().then(x=> this.myCaptions = x) )
        },
        setWeight(){
            var w = prompt("Enter weight", "100");
            api.setWeight({ w});
        },
        setCalories(){
            var cals = prompt("Enter calories", "250");
            api.setCalories(cals);
        },
        userId: ()=> api.userId
    },
}
</script>