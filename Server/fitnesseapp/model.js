//Each "session" has a list of users
class Session{
    constructor(){
        this.users = [];
        this.currentUser = null;
    }

    getUsers(){
        return this.users;
    }

    getCurrentUser(){
        return this.currentUser;
    }

    setWeight(w){
        this.currentUser.weight = w;
    }

    getWeight(){
        return this.currentUser.weight;
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
        this.currentCalories = 0;
        //this.goals = [];
        //this.exercises = [];
        //this.friends = [];
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