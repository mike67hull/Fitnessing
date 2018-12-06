//Each "session" has a list of users and current user
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
        var index = this.currentUser.friends.indexOf(f.f);
        this.currentUser.friends.splice(index, 1);
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
        this.updateCalories();
    }

    getWeight(){
        return this.currentUser.weight;
    }

    setAge(a){
        let user = this.currentUser;
        user.age = a.iAge;
        this.updateCalories();
    }

    getAge(){
        return this.currentUser.age;
    }

    setHeight(h){
        let user = this.currentUser;
        user.height = h.iHeight;
        this.updateCalories();
    }

    getHeight(){
        return this.currentUser.height;
    }

    addCalories(c){
        let user = this.currentUser;
        user.calories = user.calories + parseInt(c.iCals);
        this.updateCalories();
    }

    setCalGoal(g){
        let user = this.currentUser;
        user.goal = g.iGoal;
    }

    updateCalories(){
        this.currentUser.recCalories = this.currentUser.calCalc();
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
class User{
    constructor(name, id, fbid){
        this.name = name;
        this.id = id;
        this.fbid = fbid;
        this.weight = 0;
        this.calories = 0;
        this.age = 0;
        this.height = 0;
        this.recCalories = this.calCalc();
        this.goal = 0;
        this.workouts = [];
        this.totWorkout = 0;
        this.friends = [0,1]
    }
    //(6.3 x body weight in lbs.) + (12.9 x height in inches) - (6.8 x age in years) (CRUDE RECOMMENDED CALORIE INTAKE)
    calCalc(){
        var cal = (6.3 * this.weight) + (12.9 * (this.height*12)) - (6.8 * this.age);
        return parseInt(cal);
    }
}

//A workout has a type and length of workout
class Workout{
    constructor(id, type, length){
        this.id = id;
        this.type = type;
        this.length = length;
    }
}

//Exporting the classes
module.exports = {
    Session, User, Workout
}