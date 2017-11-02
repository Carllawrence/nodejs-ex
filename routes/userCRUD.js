var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose'),

  User = mongoose.model('User');
 
/**
 * Find user by id and store it in the request
 */
exports.user = function(req, res, next, id) {
  User.findById(id, function(err, user) {
    if (err) return next(err);
    if (!user) return next(new Error('Failed to load user ' + id));
    req.user = user;
    next();
  });
};
 
/**
 * List of user
 */
exports.query = function(req, res) {
  User.find().sort('-createdAt').exec(function(err, users) {
    if (err) return res.json(500, err);
    res.json(users);
  });
};
 
/**
 * Show a user
 */
exports.show = function(req, res) {
  res.json(req.user);
};
 
/**
 * Create a user
 */
exports.create = function(req, res) {
  User.register(new User({ username: req.body.username, firstname: req.body.firstname, lastname: req.body.lastname, department:req.body.department, telephone:req.body.telephone, picUrl: req.body.picUrl, status: req.body.status }),
        req.body.password, function (err, account) {
            if (err) {
                return res.status(500).json({
                    err: err
                });
            }

             res.json(200);
        });

};
 
  
/**
 * Update a user
 */
exports.update = function(req, res) {

  if(req.body.decision == 1) {


   var rn = require('random-number');
var gen = rn.generator({
  min:  10000000,
  max:  19999999,
  integer: true
});
var part1 = gen(); // example outputs → -350 
 
var part2 = 'IE'


req.body.regNumber = part2 +  part1;

console.log(req.body.regNumber);

}

  User.update({ _id: req.user._id }, req.body, { }, function(err, updatedUser) {

    if (err) return res.json(500, err);
    res.json(updatedUser);
  });
};

/**
 * Remove a user
 */
exports.remove = function(req, res) {
    User.findByIdAndRemove({_id: req.params.userId }, function (err) {
        if (err) return res.json(500, err);
    res.json(200);
    });
 
};