/**
 * Created by bassem on 7/15/16.
 */

var express = require('express');
var bodyParser = require('body-parser');

var Favorites = require('../models/favorites');
var verify = require('./verify');

var favRouter = express.Router();
favRouter.use(bodyParser.json());


favRouter.route('/')
    .all(verify.verifyOrdinaryUser)
    .get(function (req, res, next) {
        Favorites.findOne({postedBy:req.decoded._doc._id})
            .populate('postedBy dishes')
            .exec(function (err, result) {
                if (err) return next(err);
                res.json(result);
            });
    })
    .post(function (req, res, next) {
        Favorites.findOne({postedBy:req.decoded._doc._id}, function (err, result) {
            if(err) return next(err);
            if(!result) {
                Favorites.create({
                    postedBy : req.decoded._doc._id,
                    dishes:[req.body]
                }, function (err, dish) {
                    if (err) next(err);
                    console.log('Dish Added to Favorites!');
                    res.json(dish);
                });
            } else {
                if (result.dishes.indexOf(req.body) != -1) {
                    result.dishes.push(req.body);
                    result.save(function (err, result) {
                        if (err) next(err);
                        console.log('Dish Added to Favorites!');
                        res.json(result);
                    });
                } else {
                    console.log("This dish already exists in you fav set!");
                    res.json(result);
                }

            }
        })
    })
    .delete(function (req, res, next) {
        Favorites.remove({postedBy:req.decoded._doc._id}, function (err, resp) {
            if (err) return next(err);
            res.json(resp);
        });
    });

favRouter.route('/:dishId')
    .delete(verify.verifyOrdinaryUser, function (req, res, next) {
        "use strict";
        Favorites.findOne({postedBy:req.decoded._doc._id}, function (err, user) {
            if(err) return next(err);
            if(!user) {
                console.log("There's no favorite dishes exist for you!");
                res.json(user);

            } else {
                let index = user.dishes.indexOf(req.params.dishId);
                if(index != -1) {
                    user.dishes.splice(index, 1);
                    if (user.dishes.length) {
                        user.save(function (err, resp) {
                            if (err) next(err);
                            res.json(resp);
                        });
                    } else {
                        Favorites.remove({postedBy:req.decoded._doc._id}, function (err, resp) {
                            if (err) return next(err);
                            res.json(resp);
                        });
                    }
                } else {
                    console.log("This dish doesn't exit!");
                    res.json(user);
                }

            }
        });
    });


module.exports = favRouter;