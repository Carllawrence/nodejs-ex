var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
 
/**
 * Todo Schema
 */
var CourseSchema = new Schema({
  title: String,
 description: String,
 department: String,
 option: String,
 courseNum: String,
 length: Number,
 currentInstructorId:String,
 courseicon: String,
 level: Number,
createdAt:Date,
updatedAt:Date
 
});
 
// keep track of when todos are updated and created
CourseSchema.pre('save', function(next, done){
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});
 
mongoose.model('Course', CourseSchema);