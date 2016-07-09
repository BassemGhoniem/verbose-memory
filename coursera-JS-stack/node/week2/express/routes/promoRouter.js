/**
 * Created by bassem on 6/18/16.
 */
const express = require('express'),
    bodyParser = require('body-parser');

var promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
    })

    .get(function(req,res){
        res.end('Will send all the promotions to you!');
    })

    .post(function(req, res){
        res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
    })

    .delete(function(req, res){
        res.end('Deleting all promotions');
    });

promoRouter.route('/:id')
    .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
    })

    .get(function(req,res){
        res.end('Will send details of the promotion: ' + req.params.id +' to you!');
    })

    .put(function(req, res){
        res.write('Updating the promotion: ' + req.params.id + '\n');
        res.end('Will update the promotion: ' + req.body.name +
            ' with details: ' + req.body.description);
    })

    .delete(function(req, res){
        res.end('Deleting : promotion ' + req.params.id);
    });

module.exports = promoRouter;