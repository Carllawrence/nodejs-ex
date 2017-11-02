var mongoose = require('mongoose'),

  Course = mongoose.model('Course');
 
/**
 * Find course by id and store it in the request
 */
exports.course = function(req, res, next, id) {
  Course.findById(id, function(err, course) {
    if (err) return next(err);
    if (!course) return next(new Error('Failed to load course ' + id));
    req.course = course;
    next();
  });
};
 
/**
 * List of courses
 */
exports.query = function(req, res) {
  Course.find().sort('-createdAt').exec(function(err, courses) {
    if (err) return res.json(500, err);
    res.json(courses);
  });


};
 
/**
 * Show a course
 */
exports.show = function(req, res) {
  res.json(req.course);
};
 
/**
 * Create a course
 */
exports.create = function(req, res) {
  var course = new Course(req.body);
 
  course.save(function(err) {
    if (err) return res.status(500).json(err);
    res.json(course);
  });
};
 
/**
 * Update a course
 */
exports.update = function(req, res) {
  Course.update({ _id: req.course._id }, req.body, { }, function(err, updatedCourse) {
    if (err) return res.json(500, err);
    res.json(updatedCourse);
  });
};
 
/**
 * Remove a course
 */
exports.remove = function(req, res) {
  var course = req.course;
 
  course.remove(function(err) {
    if (err) return res.json(500, err);
    res.json(course);   
  });
};