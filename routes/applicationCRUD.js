var mongoose = require('mongoose'),
  Application = mongoose.model('Application');

/**
 * Find application by id and store it in the request
 */
exports.application = function (req, res, next, id) {
  Application.find({ userid: id }, function (err, application) {
    if (err) return res.status(500).json(err);
    if (!application) return 0;
    req.application = application;
    next();
  });
};

/**
 * List of applications
 */
exports.query = function (req, res) {
  Application.find().sort('-createdAt').exec(function (err, applications) {
    if (err) return res.status(500).json(err);
    res.json(applications);
  });
};


/**
 * Show a application
 */
exports.show = function (req, res) {
  res.json(req.application);
};

/**
 * Create a application
 */
exports.create = function (req, res) {
  var application = new Application(req.body);

  var rn = require('random-number');
  var gen = rn.generator({
    min: 1000000,
    max: 1999999,
    integer: true
  });
  var part1 = gen(); // example outputs → -350 

  var part2 = req.body.userid.substring(0, 4);

  application.uuid = part2 + part1;

  //set unique application token
  // var shortid = require('shortid');
  // shortid.characters('0123456789');
  // application.uuid = shortid.generate();


  application.save(function (err) {
    console.log(err);
    if (err) return res.status(500).json(err);
    res.json(application);
  });
};

/**
 * Update a application
 */
exports.update = function (req, res) {
  Application.update({ userid: req.body.userid }, req.body, {}, function (err, updatedApplication) {
    if (err) return res.status(500).json(err);
    res.json(updatedApplication);

  });
};

/**
 * Remove a application
 */
exports.remove = function (req, res) {
  var application = req.application;

  application.remove(function (err) {
    if (err) return res.status(500).json(err);
    res.json(application);
  });
};