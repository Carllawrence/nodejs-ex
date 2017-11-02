var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * eProject Schema
 */
var eProjectSchema = new Schema({
  title: String,
  why: String,
  what: String,
  how:String,
  department: String,
  option: String,
  studentFname: String,
  studentLname: String,
  studentId: String,
  picUrl: String,
  score: Number,
  createdAt: Date,
  updatedAt: Date

});

// keep track of when todos are updated and created
eProjectSchema.pre('save', function (next, done) {
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});

mongoose.model('eProject', eProjectSchema);