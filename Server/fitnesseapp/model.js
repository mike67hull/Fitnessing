//Each "session" has a list of users
class Session{
    constructor(){
        this.users = [
            {
                name: "Rob",
                id: 0,
                weight: 180,
                calories: 1700,
                age: 22,
                height: 6,
                friends: []
            },
            {
                name: "Kenny",
                id: 1,
                weight: 190,
                calories: 1500,
                age: 21,
                height: 5,
                friends: []
            }
        ];
        this.currentUser = null;
    }

    getFriends(){
        return this.currentUser;
    }

    removeFriend(f){
        var index = this.currentUser.friends.indexOf(f);
        this.currentUser.friends.splice(index);
    }

    addFriend(f){
        this.currentUser.friends.push(f.f);
    }

    getUsers(){
        return this.users;
    }

    getCurrentUser(){
        return this.currentUser;
    }

    setWeight(w){
        let user = this.currentUser;
        user.weight = w.iWeight;
    }

    getWeight(){
        return this.currentUser.weight;
    }

    setCalories(c){
        let user = this.currentUser;
        user.calories = c.iCals;
    }

    getCalories(){
        return this.currentUser.calories;
    }

    login(name, fbid, access_token){
        let user = this.users.find(x=> x.fbid == fbid);
        if(!user){
            user = new User(name, this.users.length, fbid);
            this.users.push(user);
            this.currentUser = user;
        }
        user.access_token = access_token;
        return user;
    }

}

//A user has a username, password, a set of goals, a list of
// exercises accomplished, and the list of friends the use would like to share their data with
class User{
    constructor(name, id, fbid){
        this.name = name;
        this.id = id;
        this.fbid = fbid;
        this.weight = 0;
        this.calories = 0;
        this.age = 0;
        this.height = 0;
        //this.goals = [];
        //this.exercises = [];
        this.friends = [0,1]
        //this.meals = [];
    }
}

//An exercise has a type, a time started, and a duration of the exercise
class Exercise{
    constructor(type, time, duration, id){
        this.id = id;
        this.type = type;
        this.time = time;
        this.duration = duration;
    }
}

//A goal has a date and a weight(User wants to hit certain weight by said date)
class Goal{
    constructor(date, weight, id){
        this.id = id;
        this.date = date;
        this.weight = weight;
    }
}

//A meal has a date and calorie amount
class Meal{
    constructor(date, calories, id){
        this.date = id;
        this.date = date;
        this.calories = calories;
    }
}


//Exporting the classes
module.exports = {
    Session, User, Exercise, Goal, Meal
}