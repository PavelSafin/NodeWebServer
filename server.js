var express         = require('express');
var data 			= require('./data.json');
var app 			= express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


/*
You can change URL from '/' to other
*/
app.get('/', function (req, res, next) {
    res.json(data);
});

app.listen(1337);