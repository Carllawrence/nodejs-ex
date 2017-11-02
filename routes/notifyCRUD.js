var mongoose = require('mongoose'),

  Notice = mongoose.model('Notice');
 
/**
 * Find notice by id and store it in the request
 */
exports.notice = function(req, res, next, id) {
  Notice.findById(id, function(err, notice) {
    if (err) return next(err);
    if (!notice) return next(new Error('Failed to load notice ' + id));
    req.notice = notice;
    next();
  });
};
 
/**
 * List of notifys
 */
exports.query = function(req, res) {
  Notice.find().sort('-createdAt').exec(function(err, notices) {
    if (err) return res.json(500, err);
    res.json(notices);
  });
};
 
/**
 * Show a notice
 */
exports.show = function(req, res) {
  res.json(req.notice);
};
 
/**
 * Create a notice
 */
exports.create = function(req, res) {
  var notice = new Notice(req.body);
 
  notice.save(function(err) {
    if (err) return res.json(500, err);
    res.json(notice);
  });
};
 
/**
 * Update a notice
 */
exports.update = function(req, res) {
  Notice.update({ _id: req.notice._id }, req.body, { }, function(err, updatedNotice) {
    if (err) return res.json(500, err);
    res.json(updatedNotice);
  });
};
 
/**
 * Remove a notice
 */
exports.remove = function(req, res) {
  var notice = req.notice;
 
  notice.remove(function(err) {
    if (err) return res.json(500, err);
    res.json(notice);   
  });
};