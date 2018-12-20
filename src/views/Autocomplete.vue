<template>
  <div class="autocomplete">
    <div class="jumbotron">
        <h1>Search</h1>
        <v-select label="full_name" @search="search" :options="results"></v-select>
    </div>
  </div>
</template>

<script>
import * as api from '@/services/api_access';
import * as vs from 'C:/Users/mike6/Desktop/Hw/WP/fitnessing/node_modules/vue-select';
import Vue from 'vue'
Vue.component('v-select', vs.VueSelect)
Vue.use(require('vue-resource'));
// eslint-disable-next-line
let loopTimer = null;
export default {
    data(){
        return {
            state: {
                users: []
            },
            currentUser: null,
            results: []
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
        userId: ()=> api.userId,
        search(search, loading) {
            loading(true)
            api.getRepositories(search, loading, this).then(x=> this.results = x);
            },
    },
}
</script>