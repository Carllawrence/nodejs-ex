var mongoose = require('mongoose'),

  Schedule = mongoose.model('Schedule');
 
/**
 * Find schedule by id and store it in the request
 */
exports.schedule = function(req, res, next, id) {
  Schedule.findById(id, function(err, schedule) {
    if (err) return next(err);
    if (!schedule) return next(new Error('Failed to load schedule ' + id));
    req.schedule = schedule;
    next();
  });
};
 
/**
 * List of schedules
 */
exports.query = function(req, res) {
  Schedule.find().sort('-createdAt').exec(function(err, schedules) {
    if (err) return res.json(500, err);
    res.json(schedules);
  });
};
 
/**
 * Show a schedule
 */
exports.show = function(req, res) {
  res.json(req.schedule);
};
 
/**
 * Create a schedule
 */
exports.create = function(req, res) {
  var schedule = new Schedule(req.body);
 
  schedule.save(function(err) {
    if (err) return res.json(500, err);
    res.json(schedule);
  });
};
 
/**
 * Update a schedule
 */
exports.update = function(req, res) {
  Schedule.update({ _id: req.schedule._id }, req.body, { }, function(err, updatedSchedule) {
    if (err) return res.status(500).json(err);
    res.json(updatedSchedule);
  });
};
 
/**
 * Remove a schedule
 */
exports.remove = function(req, res) {
  var schedule = req.schedule;
 
  schedule.remove(function(err) {
    if (err) return res.json(500, err);
    res.json(schedule);   
  });
};