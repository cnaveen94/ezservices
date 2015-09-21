var express = require('express');


var routes = function(Drink){

    var appRouter = express.Router();

    appRouter.route('/')
        .get(function(req,res){
            console.log("We are in appRouter BASE ")
            res.send(' From Route');

        });

    appRouter.route('/new')
        .get(function(req,res){
            console.log("We are in appRouter new file")
            //var query = {};
            //
            //if(req.query.genre)
            //{
            //    query.genre = req.query.genre;
            //}
            //Drink.find(query, function(err,drinks){
            //    if(err)
            //        res.status(500).send(err);
            //    else
            //        res.json(drinks);
            //});
            res.sendfile('data/new.json');

        });

    appRouter.route('/rated')
        .get(function(req,res){
            console.log("We are in appRouter rated file")
            res.sendfile('data/rated.json');
        });
    appRouter.route('/popular')
        .get(function(req,res){
            console.log("We are in appRouter popular file")
            res.sendfile('data/popular.json');
        });
    appRouter.route('/mixed')
        .get(function(req,res){
            console.log("We are in appRouter mixed file")
            res.sendfile('data/mixed.json');
        });
    appRouter.route('/home')
        .get(function(req,res){
            console.log("We are in appRouter mixed file")
            res.sendfile('data/home.json');
        });
    appRouter.route('/glasses')
        .get(function(req,res){
            console.log("We are in appRouter fecthing glasses")
            res.sendfile('data/glasses-desc.json');
        });
    return appRouter;
};



module.exports = routes;