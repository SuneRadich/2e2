var express = require('express');
var app = express();

var exports = module.exports = {};

app.get('/page200', function(req, res) {
    res.status(200);
    res.send('Page with response code 200');
});

app.get('/page404', function(req, res) {
    res.status(404);
    res.send('Err 404');
});

app.get('/page500', function(req, res) {
    res.status(500);
    res.send('Server error');
});

var server;

exports.start = function() {
    server = app.listen(3000, function() {
        console.log('Starting mock webserver on port 3000')
    });
};


exports.close = function() {
    console.log('Closing mock webserver')
    server.close();
};
