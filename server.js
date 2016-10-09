// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'NODE_ENV' variable
// process.env.NODE_ENV = process.env.NODE_ENV || 'development';

/* Load dependencies */
var express = require('./config/express');

// Create a new Express application instance
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

// /* Use the Express application instance to listen on localhost */
// app.listen(3000);

// console.log('Server running at http://localhost:3000/');

/* Expose this application */
module.exports = app;