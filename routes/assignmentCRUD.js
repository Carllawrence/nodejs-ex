var mongoose = require('mongoose'),

  Assignment = mongoose.model('Assignment');
 
/**
 * Find assignment by id and store it in the request
 */
exports.assignment = function(req, res, next, id) {
  Assignment.findById(id, function(err, assignment) {
    if (err) return next(err);
    if (!assignment) return next(new Error('Failed to load assignment ' + id));
    req.assignment = assignment;
    next();
  });
};
 
/**
 * List of assignments
 */
exports.query = function(req, res) {
  Assignment.find().sort('-createdAt').exec(function(err, assignments) {
    if (err) return res.json(500, err);
    res.json(assignments);
  });
};
 
/**
 * Show a assignment
 */
exports.show = function(req, res) {
  res.json(req.assignment);
};
 
/**
 * Create a assignment
 */
exports.create = function(req, res) {
  var assignment = new Assignment(req.body);
 
  assignment.save(function(err) {
    if (err) return res.json(500, err);
    res.json(assignment);
  });
};
 
/**
 * Update a assignment
 */
exports.update = function(req, res) {
  Assignment.update({ _id: req.assignment._id }, req.body, { }, function(err, updatedAssignment) {
    if (err) return res.status(500).json(err);
    res.json(updatedAssignment);
  });
};
 
/**
 * Remove a assignment
 */
exports.remove = function(req, res) {
  var assignment = req.assignment;
 
  assignment.remove(function(err) {
    if (err) return res.json(500, err);
    res.json(assignment);   
  });
};