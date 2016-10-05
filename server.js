var express = require('express');
var app = express();

var exports = module.exports = {};

app.get('/', function(req, res){
  res.send('Hello World');
});

app.get('/page404', function(req, res) {
    res.status(404);
    res.send('Err');
});

app.get('/page500', function(req, res) {
    res.status(500);
    res.send('Server error');
});

var server = app.listen(3000, function(){
  console.log('Magic is happening on port 3000');
});

exports.closeServer = function(){
  server.close();
};
