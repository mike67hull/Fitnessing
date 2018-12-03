const express = require('express');
const action = require('./fitnesseapp/controller')
const app = express();
var cors = require('cors');

const port = 80;
const server = "localhost";
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use("/", express.static(__dirname + "/../dist/"));
app.use("/session", action);

app.listen(port);

// eslint-disable-next-line no-console
console.log(`listening on: http://${server}:${port}`);

