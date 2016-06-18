/**
 * Created by bassem on 6/18/16.
 */
const express = require('express'),
    morgan = require('morgan'),
    hostname = 'localhost',
    port = 3000;

var app = express();


var dishRouter = require('./dishRouter'),
    promoRouter = require('./promoRouter'),
    leaderRouter = require('./leaderRouter');

app.use(morgan('dev'))
    .use('/dishes', dishRouter)
    .use('/promotions', promoRouter)
    .use('/leadership', leaderRouter)
    .use(express.static(__dirname + '/public'))
    .listen(port, hostname, function () {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
