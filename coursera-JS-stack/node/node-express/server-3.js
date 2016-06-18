var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

express()
    .use(morgan('dev'))
    .use(bodyParser.json())
    .all('/dishes', function (req, res, next) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        next();
    })
    .get('/dishes', function (req, res) {
        res.end('Will send all the dishes to you!');
    })
    .post('/dishes', function (req, res) {
        res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete('/dishes', function (req, res) {
        res.end('Deleting all dishes');
    })
    .get('/dishes/:dishId', function (req, res) {
        res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
    })
    .put('/dishes/:dishId', function (req, res) {
        res.write('Updating the dish: ' + req.params.dishId + '\n');
        res.end('Will update the dish: ' + req.body.name +
            ' with details: ' + req.body.description);
    })
    .delete('/dishes/:dishId', function (req, res) {
        res.end('Deleting dish: ' + req.params.dishId);
    })
    .use(express.static(__dirname + '/public'))
    .listen(port, hostname, function () {
        console.log(`Server running at http://${hostname}:${port}/`);
    });