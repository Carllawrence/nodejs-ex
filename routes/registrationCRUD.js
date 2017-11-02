var mongoose = require('mongoose'),

  Registration = mongoose.model('Registration');
 
/**
 * Find registration by id and store it in the request
 */
exports.registration = function(req, res, next, id) {
  Registration.findById(id, function(err, registration) {
    if (err) return next(err);
    if (!registration) return next(new Error('Failed to load registration ' + id));
    req.registration = registration;
    next();
  });
};
 
/**
 * List of registrations
 */
exports.query = function(req, res) {

  console.log(req.query.assignmentId, req.query.studentId);
if(req.query.assignmentId){
 Registration.find({assignmentId:req.body.assignmentId}).sort('-createdAt').exec(function(err, registrations) {
    if (err) return res.json(500, err);
    res.json(registrations);
  });

} else if (req.query.studentId){
 Registration.find({studentId:req.user._id}).sort('-createdAt').exec(function(err, registrations) {
    if (err) return res.json(500, err);
    res.json(registrations);
  });

  } else {

 Registration.find().sort('-createdAt').exec(function(err, registrations) {
    if (err) return res.json(500, err);
    res.json(registrations);
  });
  }; 
};

/**
 * Show a registration
 */
exports.show = function(req, res) {
  res.json(req.registration);
};
 
/**
 * Create a registration
 */
exports.create = function(req, res) {
  var registration = new Registration(req.body);
 
  registration.save(function(err) {
    if (err) return res.json(500, err);
    res.json(registration);
  });
};
 
/**
 * Update a registration
 */
exports.update = function(req, res) {
  Registration.update({ _id: req.registration._id }, req.body, { }, function(err, updatedRegistration) {
    if (err) return res.status(500).json(err);
    res.json(updatedRegistration);
  });
};
 
/**
 * Remove a registration
 */
exports.remove = function(req, res) {
  var registration = req.registration;
 
  registration.remove(function(err) {
    if (err) return res.json(500, err);
    res.json(registration);   
  });
};