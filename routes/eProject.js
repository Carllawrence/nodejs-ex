var mongoose = require('mongoose'),

  eProject = mongoose.model('eProject');
 
/**
 * Find eproject by id and store it in the request
 */
exports.eproject = function(req, res, next, id) {
  eProject.findById(id, function(err, eproject) {
    if (err) return next(err);
    if (!eproject) return next(new Error('Failed to load eproject ' + id));
    req.eproject = eproject;
    next();
  });
};
 
/**
 * List of eprojects
 */
exports.query = function(req, res) {

  console.log(req.query.eProjectId, req.query.studentId);
if(req.query.eProjectId){
 eProject.find({eProjectId:req.query.eProjectId}).sort('-createdAt').exec(function(err, eprojects) {
    if (err) return res.json(500, err);
    res.json(eprojects);
  });

} else if (req.query.studentId){
 eProject.find({studentId:req.user._id}).sort('-createdAt').exec(function(err, eprojects) {
    if (err) return res.json(500, err);
    res.json(eprojects);
  });

  } else {

 eProject.find().sort('-createdAt').exec(function(err, eprojects) {
    if (err) return res.json(500, err);
    res.json(eprojects);
  });
  }; 
};

/**
 * Show a eproject
 */
exports.show = function(req, res) {
  res.json(req.eproject);
};
 
/**
 * Create a eproject
 */
exports.create = function(req, res) {
  var eproject = new eProject(req.body);
 
  eproject.save(function(err) {
    if (err) return res.json(500, err);
    res.json(eproject);
  });
};
 
/**
 * Update a eproject
 */
exports.update = function(req, res) {
  eProject.update({ _id: req.eproject._id }, req.body, { }, function(err, updatedeProject) {
    if (err) return res.status(500).json(err);
    res.json(updatedeProject);
  });
};
 
/**
 * Remove a eproject
 */
exports.remove = function(req, res) {
  var eproject = req.eproject;
 
  eproject.remove(function(err) {
    if (err) return res.json(500, err);
    res.json(eproject);   
  });
};