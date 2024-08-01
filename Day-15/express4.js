var express=require('express');
var app=express();

app.get('/:chaitanya',function(req,res){
    res.send("The id you specified " + req.params.chaitanya)
});
app.listen(3000);