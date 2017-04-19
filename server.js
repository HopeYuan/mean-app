var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var app=express();
var authenticationController = require('./server/controllers/anthentication-controller');


mongoose.connect('mongodb://localhost:27017/mean-app');
app.use(bodyParser.json());

app.use('/app', express.static(__dirname + "/app" ));
app.use('/node_modules', express.static(__dirname + "/node_modules"));

app.get('/', function(req, res){
    res.sendfile('index.html');
});

app.post("/api/user/signup",authenticationController.signup);


app.listen('3000',function (){
	console.log("Listening for loacal host 3000");
});


