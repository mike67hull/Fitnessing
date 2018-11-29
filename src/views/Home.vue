<template>
  <div class="home">
      <h1>Henlo</h1>
        <h5 class="card-header">Players</h5>
      <a @click.prevent="login" class="btn btn-sm btn-primary" :class="{disabled: userId() !== null}">+</a>
          <i v-if="userId() !== null">(Welcome {{session.users[userId()].name}})</i>
              <!---->   
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
        }
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
        userId: ()=> api.userId
    },
}
</script>