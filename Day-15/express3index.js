var express = require('express');
var app=express();

var things=require('./express3.js');
app.use('/chaitanya',things);
app.listen(3000);