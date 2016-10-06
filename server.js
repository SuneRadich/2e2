/**
* Mock server for demo purposes only
*/

var express = require('express');
var app = express();
var server;

//Path to respond with regular response code
app.get('/page200', function(req, res) {
    res.status(200);
    res.send('Page with response code 200');
});


//Response with 404
app.get('/page404', function(req, res) {
    res.status(404);
    res.send('Err 404');
});

//Response with server error
app.get('/page500', function(req, res) {
    res.status(500);
    res.send('Server error');
});

//Expose functions
module.exports = {
    start: function start() {
        server = app.listen(3000, function() {
            console.log('Starting mock webserver on port 3000')
        });
    },

    close: function close() {
        console.log('Closing mock webserver')
        server.close();
    }

};
