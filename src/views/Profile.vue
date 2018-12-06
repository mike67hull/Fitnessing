<template>
<div>
        <div class="jumbotron">
            <h1 class="display-4">Welcome back {{state.currentUser.name}}!</h1>
            <hr class="my-4">
            <div v-if="state.currentUser.age === 0">
                <a @click.prevent="setAge()" class="btn btn-warning btn-sm" role="button">Set Age</a>
            </div>
            <h5>Your Age: {{state.currentUser.age}}</h5>
            <div v-if="state.currentUser.height === 0">
                <a @click.prevent="setHeight()" class="btn btn-warning btn-sm" role="button">Set Height</a>
            </div>
            <h5>Your Height: {{state.currentUser.height}}</h5>
            <div v-if="state.currentUser.weight === 0">
                <a @click.prevent="setWeight()" class="btn btn-warning btn-sm" role="button">Set Weight</a>
            </div>
            <h5>Your weight: {{state.currentUser.weight}}lbs</h5>
                <h5>Your current calories for the day: {{state.currentUser.calories}}</h5>
        </div>
            <div class="card">
                <h5 class="card-header">Friends</h5>
                <ul class="list-group list-group-flush">
                    <li v-for="c in state.currentUser.friends" :key="c.id" class="list-group-item">
                        {{state.users[c].name}}
                        <ul>
                            <li>Id: {{state.users[c].id}}</li>
                            <li>Age: {{state.users[c].age}}</li>
                            <li>Weight: {{state.users[c].weight}}</li>
                            <li>Calories: {{state.users[c].calories}}</li>
                            <a @click.prevent="removeFriend(c.id)" class="btn btn-danger btn-sm" role="button">Remove Friend</a>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="card">
                <h5 class="card-header">Not Friends</h5>
                <ul class="list-group list-group-flush">
                    <li v-for="c in state.users" :key="c.id" class="list-group-item">
                        <div v-if="state.currentUser.friends.indexOf(c.id) < 0">
                            {{c.name}}
                            <a @click.prevent="addFriend(c.id)" class="btn btn-success btn-sm" role="button">Add Friend</a>
                        </div>
                    </li>
                </ul>
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
            /*myId: null,
            myName: [],
            myWeight: [],
            myAge: null,
            myCalories: null,
            myHeight: null,
            myFriends: []*/
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
        setWeight(){
            var iWeight = prompt("Enter weight", "100");
            if(iWeight != null && iWeight != ""){
                api.setWeight({iWeight});
            }
        },
        setAge(){
            var iAge = prompt("Enter age", "21");
            if(iAge != null && iAge != ""){
                api.setAge({iAge});
            }
        },
        setHeight(){
            var iHeight = prompt("Enter height", "5.8");
            if(iHeight != null && iHeight != ""){
                api.setHeight({iHeight});
            }
        },
        setCalories(){
            var iCals = prompt("Enter calories", "250");
            api.setCalories({iCals});
        },
        getUsers(){
            return api.getUsers();
        },
        getFriends(){
            return api.getFriends();
        },
        removeFriend(f){
            api.removeFriend({f});
        },
        addFriend(f){
            api.addFriend({f});
        },
        userId: ()=> api.userId
    },
}
</script>