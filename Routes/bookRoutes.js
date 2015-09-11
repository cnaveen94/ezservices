var express = require('express');


var routes = function(Book){

    var bookRouter = express.Router();

    bookRouter.route('/')
        .get(function(req,res){

            res.send(' From Route');

        });
    return bookRouter;
};

module.exports = routes;