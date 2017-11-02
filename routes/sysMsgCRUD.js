var mongoose = require('mongoose'),

  SysMsg = mongoose.model('SysMsg');
 
/**
 * Find sysMsg by id and store it in the request
 */
exports.sysMsg = function(req, res, next, id) {
  SysMsg.findById(id, function(err, sysMsg) {
    if (err) return next(err);
    if (!sysMsg) return next(new Error('Failed to load sysMsg ' + id));
    req.sysMsg = sysMsg;
    next();
  });
};
 
/**
 * List of notifys
 */
exports.query = function(req, res) {
  SysMsg.find().sort('-createdAt').exec(function(err, sysMsgs) {
    if (err) return res.json(500, err);
    res.json(sysMsgs);
  });
};
 
/**
 * Show a sysMsg
 */
exports.show = function(req, res) {
  res.json(req.sysMsg);
};
 
/**
 * Create a sysMsg
 */
exports.create = function(req, res) {
  var sysMsg = new SysMsg(req.body);
 
  sysMsg.save(function(err) {
    if (err) return res.json(500, err);
    res.json(sysMsg);
  });
};
 
/**
 * Update a sysMsg
 */
exports.update = function(req, res) {
  SysMsg.update({ _id: req.sysMsg._id }, req.body, { }, function(err, updatedSysMsg) {
    if (err) return res.json(500, err);
    res.json(updatedSysMsg);
  });
};
 
/**
 * Remove a sysMsg
 */
exports.remove = function(req, res) {
  var sysMsg = req.sysMsg;
 
  sysMsg.remove(function(err) {
    if (err) return res.json(500, err);
    res.json(sysMsg);   
  });
};