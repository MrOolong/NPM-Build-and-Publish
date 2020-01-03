var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Testing the route');
})

app.listen(3000, function(){
    console.log('Running on port 3000');
})
