var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Todo Schema
 */
var AttendanceSchema = new Schema({

  studentId: String,
  studentFirstname: String,
  studentLastname: String,
  attended: Boolean,
  instructorId: String,
  courseId: String,
  schoolYear: String,
  semester: String,
  courseTitle: String,
  level: String,
  option: String,
  department: String,
  createdAt: Date,
  updatedAt: Date

});

// keep track of when todos are updated and created
AttendanceSchema.pre('save', function (next, done) {
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});

mongoose.model('Attendance', AttendanceSchema);