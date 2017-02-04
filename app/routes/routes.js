module.exports = (function() {
    'use strict';

    // ROUTES FOR OUR API
    // =============================================================================
    var router = require('express').Router();              // get an instance of the express Router

    var Section = require('../models/Section.js');

    // test route to make sure everything is working (accessed at GET http://localhost:8080/playground/nodeAPI)
    router.get('/', function(req, res) {
        res.json({ message: 'hello!' });   
    });

    router.get('/article',function(req,res){
        //db logic
        Section.getArticle();
        res.json({message: "Article: " + Section.getArticle()});
    });

    router.route('/article').post(function(req,res){
        Section.setArticle(req.body.article);
        res.json({message: "article created: " + Section.getArticle()});
    });

    return router;
})();