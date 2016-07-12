var express = require('express');
var bodyParser = require('body-parser');

var Promotions = require('../models/promotions');

var promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .get(function (req, res) {
        Promotions.find({}, function (err, promo) {
            if (err) throw err;
            res.json(promo);
        });
    })

    .post(function (req, res) {
        Promotions.create(req.body, function (err, promo) {
            if (err) throw err;
            console.log('Promotion created!');
            var id = promo._id;

            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end('Added the promo with id: ' + id);
        });
    })

    .delete(function (req, res) {
        Promotions.remove({}, function (err, resp) {
            if (err) throw err;
            res.json(resp);
        });
    });

promoRouter.route('/:promoId')
    .get(function (req, res) {
        Promotions.findById(req.params.promoId, function (err, promo) {
            if (err) throw err;
            res.json(promo);
        });
    })

    .put(function (req, res) {
        Promotions.findByIdAndUpdate(req.params.promoId, {
            $set: req.body
        }, {
            new: true
        }, function (err, promo) {
            if (err) throw err;
            res.json(promo);
        });
    })

    .delete(function (req, res) {
        Promotions.findByIdAndRemove(req.params.promoId, function (err, resp) {
            if (err) throw err;
            res.json(resp);
        });
    });

module.exports = promoRouter;