var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

var Something = require('./app/models/something.js');

// test route to make sure everything is working (accessed at GET http://localhost:8080/playground/nodeAPI)
router.get('/', function(req, res) {
    res.json({ message: 'hello!' });   
});

router.get('/somethingYo',function(req,res){
    Something.setName("yo");
    res.json({message: "Name is " + Something.getName()});
});

router.route('/something').post(function(req,res){
    Something.setName(req.body.name);
    res.json({message: "something created, name is " + Something.getName()});
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/playground/nodeAPI', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('running on port: ' + port);