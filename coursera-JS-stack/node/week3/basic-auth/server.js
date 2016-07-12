var morgan = require('morgan');
var express = require('express');
var hostname = 'localhost';
var port = 3000;
var app = express();

function auth (req, res, next) {
    console.log(req.headers);
    var authHeader = req.headers.authorization;
    if (!authHeader) {
        var err = new Error('You are not authenticated!');
        err.status = 401;
        next(err);
        return;
    }

    var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];
    if (user == 'bassem' && pass == 'password') {
        next(); // authorized
    } else {
        var err = new Error('You are not authenticated!');
        err.status = 401;
        next(err);
    }
}

function handleErr (err,req,res,next) {
    res.writeHead(err.status || 500, {
        'WWW-Authenticate': 'Basic',
        'Content-Type': 'text/plain'
    });
    res.end(err.message);
}

express()
    .use(morgan('dev'))
    .use(auth)
    .use(express.static(__dirname + '/public'))
    .use(handleErr)
    .listen(port, hostname, function () {
        console.log('Server running at http://' + hostname + ':' + port + '/');
    });
