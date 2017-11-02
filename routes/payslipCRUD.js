var mongoose = require('mongoose'),

  Payslip = mongoose.model('Payslip');
 
/**
 * Find payslip by id and store it in the request
 */
exports.payslip = function(req, res, next, id) {
  Payslip.find({pie:id}, function(err, payslip) {
    
   if (err) return res.status(500).json(err);
    if (!payslip) return 0;
    req.payslip = payslip;
    next();
  });
};
 
/**
 * List of payslips
 */
exports.query = function(req, res) {
  Payslip.find().sort('-createdAt').exec(function(err, payslips) {
    if (err) return res.status(500).json(err);
    res.json(payslips);
  });
};

 
/**
 * Show a payslip
 */
exports.show = function(req, res) {
  res.json(req.payslip);
};
 
/**
 * Create a payslip
 */
exports.create = function(req, res) {
  var payslip = new Payslip(req.body);
 
 payslip.save(function(err) {
    console.log(err);
    if (err) return res.status(500).json(err);
    res.json(payslip);
  });
};
 
/**
 * Update a payslip
 */
exports.update = function(req, res) {
  Payslip.update({userid: req.body.userid}, req.body, { }, function(err, updatedPayslip) {
    if (err) return res.status(500).json(err);
    res.json(updatedPayslip);

  });
};
 
/**
 * Remove a payslip
 */
exports.remove = function(req, res) {
  var payslip = req.payslip;
 
  payslip.remove(function(err) {
     if (err) return res.status(500).json(err);
    res.json(payslip);   
  });
};