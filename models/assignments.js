var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
 
/**
 * Todo Schema
 */
var AssignmentSchema = new Schema({
  assignmentName: String, 
  type: String, 
  total: Number, 
 instructorId: String,
 instructorFirstname: String,
 instructorLastname: String,
 courseId: String,
 semester: String,
 courseTitle: String,
 level: String,
 option: String,
 department: String,
createdAt:Date,
updatedAt:Date
 
});
 
// keep track of when todos are updated and created
AssignmentSchema.pre('save', function(next, done){
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});
 
mongoose.model('Assignment',AssignmentSchema);