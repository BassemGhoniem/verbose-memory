var morgan = require('morgan');
var express = require('express');
var hostname = 'localhost';
var port = 3000;


express()
    .use(morgan('combined'))
    .use(express.static(__dirname + '/public'))
    .listen(port, hostname, function () {
        console.log('Server running at http://' + hostname + ':' + port + '/');
    });
