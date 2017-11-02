var mongoose = require('mongoose'),

  Grade = mongoose.model('Grade');
 
/**
 * Find grade by id and store it in the request
 */
exports.grade = function(req, res, next, id) {
  Grade.findById(id, function(err, grade) {
    if (err) return next(err);
    if (!grade) return next(new Error('Failed to load grade ' + id));
    req.grade = grade;
    next();
  });
};
 
/**
 * List of grades
 */
exports.query = function(req, res) {

  console.log(req.query.assignmentId, req.query.studentId);
if(req.query.assignmentId){
 Grade.find({assignmentId:req.query.assignmentId}).sort('-createdAt').exec(function(err, grades) {
    if (err) return res.json(500, err);
    res.json(grades);
  });

} else if (req.query.studentId){
 Grade.find({studentId:req.user._id}).sort('-createdAt').exec(function(err, grades) {
    if (err) return res.json(500, err);
    res.json(grades);
  });

  } else {

 Grade.find().sort('-createdAt').exec(function(err, grades) {
    if (err) return res.json(500, err);
    res.json(grades);
  });
  }; 
};

/**
 * Show a grade
 */
exports.show = function(req, res) {
  res.json(req.grade);
};
 
/**
 * Create a grade
 */
exports.create = function(req, res) {
  var grade = new Grade(req.body);
 
  grade.save(function(err) {
    if (err) return res.json(500, err);
    res.json(grade);
  });
};
 
/**
 * Update a grade
 */
exports.update = function(req, res) {
  Grade.update({ _id: req.grade._id }, req.body, { }, function(err, updatedGrade) {
    if (err) return res.status(500).json(err);
    res.json(updatedGrade);
  });
};
 
/**
 * Remove a grade
 */
exports.remove = function(req, res) {
  var grade = req.grade;
 
  grade.remove(function(err) {
    if (err) return res.json(500, err);
    res.json(grade);   
  });
};