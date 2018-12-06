const express = require('express');
const { Session, User, Workout} = require('./model');

var session = new Session();

const app = express.Router();

app.get('/', (req, res) => {
    res.send({...session, users: session.getUsers()});
})

app.get('/users', (req, res) => {
    res.send({...session, users: session.getUsers()});
})

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

app.post('/users', (req, res) => {
    const user = session.login(req.body.name, req.body.fbid, req.body.access_token);
    res.send(user);
})

app.post('/currentuser/workouts', (req, res) => {
    const workout = session.addWorkout(req.body.type, req.body.length);
    res.send(workout);
})

app.post('/currentuser/weight', (req, res) => {
    session.setWeight(req.body.w);
    res.send(session.getWeight())
})

app.post('/currentuser/calories', (req, res) => {
    session.addCalories(req.body.c);
    res.send(session.getCalories())
})

app.post('/currentuser/goal', (req, res) => {
    session.setCalGoal(req.body.g);
    res.send(session.getCalories())
})

app.post('/currentuser/age', (req, res) => {
    session.setAge(req.body.a);
    res.send(session.getAge())
})

app.post('/currentuser/height', (req, res) => {
    session.setHeight(req.body.h);
    res.send(session.getHeight())
})

module.exports = app;