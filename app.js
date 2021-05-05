const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config/config');
const auth = require('./routes/auth.route'); // Imports routes for the auth
const ticket = require('./routes/ticket.route'); // Imports routes for the tickets

// initialize our express app
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let mongoDB = `mongodb://${config.mongo.hostDetails}:${config.mongo.port}/${config.mongo.database}`;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(auth);
app.use('/tickets', ticket);

let port = config.port;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});