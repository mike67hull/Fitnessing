const express = require('express');
const action = require('./fitnesseapp/controller')
const app = express();

const port = 80;
const server = "localhost";

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", express.static(__dirname + "/../dist/"));
app.use("/profile", action);

app.listen(port);

// eslint-disable-next-line no-console
console.log(`listening on: http://${server}:${port}`);

