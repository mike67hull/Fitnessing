<template>
  <div class="calories">
    <div class="jumbotron">
            <h1 class="display-4">{{state.currentUser.name}}'s Calorie Management</h1>
            <hr class="my-4">
            <div v-if="state.currentUser.goal === 0">
                <a @click.prevent="setCalGoal()" class="btn btn-warning btn-sm" role="button">Set Calorie Goal</a>
            </div>
            <h5>Your caloric goal for today: {{state.currentUser.goal}}</h5>
            <h5>Calories per day to maintain weight: {{state.currentUser.recCalories}}</h5>
            <h5>Your current calories for the day: {{state.currentUser.calories}}</h5>
            <div v-if="state.currentUser.calories < state.currentUser.recCalories">
                <p>(You will lose weight eating that many calories)</p>
            </div>
            <div v-if="state.currentUser.calories > state.currentUser.recCalories">
                <p>(You will gain weight eating that many calories)</p>
            </div>
            <a @click.prevent="addCalories()" class="btn btn-success btn-sm" role="button">Add new meal calories</a>
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
        },
        login() {
            fb.FBLogin();
        },
        addCalories(){
            var iCals = prompt("Enter calories from the meal", "250");
            api.addCalories({iCals});
        },
        setCalGoal(){
            var iGoal = prompt("Enter your calorie goal for today", "1700");
            api.setCalGoal({iGoal});
        },
        userId: ()=> api.userId
    },
}

</script>