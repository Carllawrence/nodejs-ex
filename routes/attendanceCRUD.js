var mongoose = require('mongoose'),

  Attendance = mongoose.model('Attendance');
 
/**
 * Find attendance by id and store it in the request
 */
exports.attendance = function(req, res, next, id) {
  Attendance.findById(id, function(err, attendance) {
    if (err) return next(err);
    if (!attendance) return next(new Error('Failed to load attendance ' + id));
    req.attendance = attendance;
    next();
  });
};
 
/**
 * List of assignments
 */
exports.query = function(req, res) {
  Attendance.find().sort('-createdAt').exec(function(err, attendances) {
    if (err) return res.json(500, err);
    res.json(attendances);
  });
};
 
/**
 * Show a attendance
 */
exports.show = function(req, res) {
  res.json(req.attendance);
};
 
/**
 * Create a attendance
 */
exports.create = function(req, res) {
  var attendance = new Attendance(req.body);
 
  attendance.save(function(err) {
    if (err) return res.json(500, err);
    res.json(attendance);
  });
};
 
/**
 * Update a attendance
 */
exports.update = function(req, res) {
  Attendance.update({ _id: req.attendance._id }, req.body, { }, function(err, updatedAttendance) {
    if (err) return res.status(500).json(err);
    res.json(updatedAttendance);
  });
};
 
/**
 * Remove a attendance
 */
exports.remove = function(req, res) {
  var attendance = req.attendance;
 
  attendance.remove(function(err) {
    if (err) return res.json(500, err);
    res.json(attendance);   
  });
};