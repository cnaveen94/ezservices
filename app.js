var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var Book = require('./models/bookModel');
var app = express();
var port = process.env.PORT || 3000;


bookRouter = require('./Routes/bookRoutes')(Book);
app.use('/api/books', bookRouter);


app.get("/",function(req,res){
    res.json({"error" : false,"message" : "Hello World 12345 "});
});


app.listen(port, function(){
    console.log('Gulp is running my app on  PORT: ' + port);
});