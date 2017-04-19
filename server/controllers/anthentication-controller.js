var mongoose = require('mongoose');
var User=require("../datasets/user");

module.exports.signup=function(req,res){
    var user=new User(req.body);


    
    user.save();
    req.json(req.body);
}