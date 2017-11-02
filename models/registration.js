var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Todo Schema
 */
var RegistrationSchema = new Schema({

  studentId: String,
  studentFirstname: String,
  studentLastname: String,
  registration: Number,
  schoolYear: String,
  semester: String,
  level: String,
  option: String,
  department: String,
  createdAt: Date,
  updatedAt: Date

});

// keep track of when todos are updated and created
RegistrationSchema.pre('save', function (next, done) {
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});

mongoose.model('Registration', RegistrationSchema);