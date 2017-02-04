var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

var routes = require('./app/routes/routes.js');

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/playground', routes);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('running on port: ' + port);