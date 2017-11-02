var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Todo Schema
 */
var PayslipSchema = new Schema({
  
 dco: Date,
 dva: Date,
 code: String,
 debit: String,
 credit: String,
 des:String,
 code2:String,
createdAt:Date,
updatedAt:Date 
});

// keep track of when todos are updated and created
PayslipSchema.pre('save', function (next, done) {
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});

mongoose.model('Payslip', PayslipSchema);