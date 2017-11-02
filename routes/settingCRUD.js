var mongoose = require('mongoose'),

  Setting = mongoose.model('Setting');
 
/**
 * Find setting by id and store it in the request
 */
exports.setting = function(req, res, next, id) {
  Setting.findById(id, function(err, setting) {
    if (err) return next(err);
    if (!setting) return next(new Error('Failed to load setting ' + id));
    req.setting = setting;
    next();
  });
};
 
/**
 * List of settings
 */
exports.query = function(req, res) {
  Setting.find().sort('-createdAt').exec(function(err, settings) {
    if (err) return res.json(500, err);
    res.json(settings);
  });
};
 
/**
 * Show a setting
 */
exports.show = function(req, res) {
  res.json(req.setting);
};
 
/**
 * Create a setting
 */
exports.create = function(req, res) {
  var setting = new Setting(req.body);
 
  setting.save(function(err) {
    if (err) return res.json(500, err);
    res.json(setting);
  });
};
 
/**
 * Update a setting
 */
exports.update = function(req, res) {
  Setting.update({ _id: req.setting._id }, req.body, { }, function(err, updatedSetting) {
    if (err) return res.status(500).json(err);
    res.json(updatedSetting);
  });
};
 
/**
 * Remove a setting
 */
exports.remove = function(req, res) {
  var setting = req.setting;
 
  setting.remove(function(err) {
    if (err) return res.json(500, err);
    res.json(setting);   
  });
};