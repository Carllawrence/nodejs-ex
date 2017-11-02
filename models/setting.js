var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Todo Schema
 */
var SettingSchema = new Schema({
  schoolYear: String,
  startDate: Date,
  endDate: Date,
  regStart: Date,
  regEnd: Date,
  regFee: Number,
  semesterOneStart: Date,
  semesterOneEnd: Date,
  semesterTwoStart: Date,
  semesterTwoEnd: Date,
  createdAt: Date,
  updatedAt: Date

});

// keep track of when todos are updated and created
SettingSchema.pre('save', function (next, done) {
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});

mongoose.model('Setting', SettingSchema);