const express = require('express')
const {json, urlencoded} = require('body-parser')

// Create an express app
const app = express()

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }))

// Parse requests of content-type - application/json
app.use(json())

// Configuring the database
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// Root route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to participant registration system"})
})

// Require participant routes
require('./app/routes/participant.routes')(app);

// Listen for requests
app.listen(3000, () => {
    console.log('Server listening on port 3000')
})