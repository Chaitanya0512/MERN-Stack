var express=require('express');
var app=express();

app.get('/mern',function(req,res){
    res.send("Welcome to express js world tested by chaitanya")
});

app.listen(3000);