var express = require('express'),
    //mongoose = require('mongoose'),
    bodyParser = require('body-parser');


//var db = mongoose.connect('mongodb://localhost/boozerdb');
var Drink = require('./models/submitDrinkModel');

var app = express();
var port = process.env.PORT || 3000;

appRouter = require('./Routes/appRoutes')(Drink);
app.use('/api/drinks', appRouter);


app.get("/",function(req,res){
    console.log("We are in appjs router ")
    res.json({"error1" : true,"message" : "Invalid Link"});
    //res.sendfile('data/new.json');
});

app.listen(port, function(){
    console.log(' My app is running on  PORT: ' + port);
});