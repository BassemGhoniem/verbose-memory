/**
 * Created by bassem on 6/18/16.
 */
const express = require('express'),
    bodyParser = require('body-parser');

var leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
    })

    .get(function(req,res){
        res.end('Will send all the leaders to you!');
    })

    .post(function(req, res){
        res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
    })

    .delete(function(req, res){
        res.end('Deleting all leaders');
    });

leaderRouter.route('/:id')
    .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
    })

    .get(function(req,res){
        res.end('Will send details of the leader: ' + req.params.id +' to you!');
    })

    .put(function(req, res){
        res.write('Updating the leader: ' + req.params.id + '\n');
        res.end('Will update the leader: ' + req.body.name +
            ' with details: ' + req.body.description);
    })

    .delete(function(req, res){
        res.end('Deleting leader: ' + req.params.id);
    });

module.exports = leaderRouter;
