const express = require('express');
const { Session, User, Exercise, Goal, Meal} = require('./model');

var session = new Session();

const app = express.Router();

//Posting list of users of current session
app.get('/', (req, res) => {
    res.send({...session, users: session.getUsers()});
})

//Getting list of users
app.get('/users', (req, res) => {
    res.send({...session, users: session.getUsers()});
})

//Getting currentusers friends
app.get('/currentuser/friends', (req, res) => {
    res.send(session.getFriends());
})

app.post('/currentuser/friends', (req, res) => {
    session.removeFriend(req.body.f);
    res.send(session.getFriends())
})

app.post('/currentuser/friends/add', (req, res) => {
    session.addFriend(req.body.f);
    res.send(session.getFriends())
})

//Adding new user to list of users and setting as current user
app.post('/users', (req, res) => {
    const user = session.login(req.body.name, req.body.fbid, req.body.access_token);
    res.send(user);
})

app.post('/currentuser/weight', (req, res) => {
    session.setWeight(req.body.w);
    res.send(session.getWeight())
})

app.post('/currentuser/calories', (req, res) => {
    session.setCalories(req.body.c);
    res.send(session.getCalories())
})

//Adding new exercise to a specific user
app.post('/:username/exercises', (req, res) => {
    const curruser = session.users.find(c => c.username === req.params.username);
    const exercise = new Exercise(req.body.type, req.body.time, req.body.duration, curruser.exercises.length+1);
    curruser.exercises.push(exercise);
    res.send(curruser.exercises);
})

//Adding new goal to a specific user
app.post('/:username/goals', (req, res) => {
    const curruser = session.users.find(c => c.username === req.params.username);
    const goal = new Goal(req.body.date, req.body.calories, curruser.goals.length+1);
    curruser.goals.push(goal);
    res.send(curruser.goals);
})

//Adding new meal to a specific user
app.post('/:username/meals', (req, res) => {
    const curruser = session.users.find(c => c.username === req.params.username);
    const meal = new Meal(req.body.date, req.body.calories, curruser.meals.length+1);
    curruser.meals.push(meal);
    res.send(curruser.meals);
})

//Adding user to friends list of current user
app.post('/:username/friends', (req, res) => {
    const friend = session.users.find(c => c.username === req.body.username);
    if(!friend) return res.status(404).send('No friend found');
    const curruser = session.users.find(c => c.username === req.params.username);
    curruser.friends.push(friend);
    res.send(curruser.friends);
})

//Delete user
app.delete('/:username', (req, res) => {
    const curruser = session.users.find(c => c.username === req.body.username);
    if(!curruser) return res.status(404).send('No user found');
    const index = session.users.indexOf(curruser);
    session.users.splice(index, 1);
    res.send(curruser);
})

//Displays information the user
app.post('/:username', (req, res) => {
    const curruser = session.users.find(c => c.username === req.params.username);
    if(!curruser) return res.status(404).send('No user found');
    res.send(curruser);
})

//Updates current users username and/or password
app.put('/:username', (req, res) => {
    const curruser = session.users.find(c => c.username === req.params.username);
    if(!curruser) return res.status(404).send('No user found');
    const newUsername = req.body.username;
    if(newUsername) curruser.username = newUsername;
    const newPassword = req.body.password;
    if(newPassword) curruser.password = newPassword;
    const newWeight = req.body.weight;
    if(newWeight) curruser.weight = newWeight;
});

module.exports = app;