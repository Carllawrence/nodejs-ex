var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
 
/**
 * Todo Schema
 */
var GradeSchema = new Schema({
  assignmentName: String, 
  assignmentId: String,
  type: String, 
  total: Number, 
  studentId: String, 
  studentFirstname: String, 
  studentLastname:String, 
 grade: Number,
 instructorId: String,
 courseId: String,
 schoolYear: String,
 semester: String,
 courseTitle: String,
 level: String,
 option: String,
 department: String,
createdAt:Date,
updatedAt:Date
 
});
 
// keep track of when todos are updated and created
GradeSchema.pre('save', function(next, done){
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});
 
mongoose.model('Grade', GradeSchema);