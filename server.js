var express = require('express');

var app = express();

// Note: Node's Crpyto Function can also be used for the randomizer
var random = require('./modules/module1.js');

app.get('/', function(req, res){
    res.send('Random Characters: ' + random.RandomChar(10));
})

app.listen(3000, function(){
    console.log('Running on port 3000');
})
