var mongoose = require('mongoose'),

  Mail = mongoose.model('Mail');
 
/**
 * Find mail by id and store it in the request
 */
exports.mail = function(req, res, next, id) {
  Mail.findById(id, function(err, mail) {
    if (err) return next(err);
    if (!mail) return next(new Error('Failed to load mail ' + id));
    req.mail = mail;
    next();
  });
};
 
/**
 * List of mails
 */
exports.query = function(req, res) {
  Mail.find().sort('-createdAt').exec(function(err, mails) {
    if (err) return res.json(500, err);
    res.json(mails);
  });
};
 
/**
 * Show a mail
 */
exports.show = function(req, res) {
  res.json(req.mail);
};
 
/**
 * Create a mail
 */
exports.create = function(req, res) {
  var mail = new Mail(req.body);
 
  mail.save(function(err) {
    if (err) return res.json(500, err);
    res.json(mail);
  });
};
 
/**
 * Update a mail
 */
exports.update = function(req, res) {
  Mail.update({ _id: req.mail._id }, req.body, { }, function(err, updatedMail) {
    if (err) return res.json(500, err);
    res.json(updatedMail);
  });
};
 
/**
 * Remove a mail
 */
exports.remove = function(req, res) {
  var mail = req.mail;
 
  mail.remove(function(err) {
    if (err) return res.json(500, err);
    res.json(mail);   
  });
};