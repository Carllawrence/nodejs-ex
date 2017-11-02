var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Todo Schema
 */
var ScheduleSchema = new Schema({
  title: String,
  id: String,
  courseId: String,
  courseTitle: String,
  instructorId: String,
  firstname: String,
  lastname: String,
  semester:String,
  department:String,
  option:String,
  timeSlot:{time: String, slot: String},
  level: Number,
  academicYear: String,
  day: String,
  createdAt: Date,
  updatedAt: Date

});

// keep track of when todos are updated and created
ScheduleSchema.pre('save', function (next, done) {
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});

mongoose.model('Schedule', ScheduleSchema);