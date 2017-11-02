var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
 
/**
 * Todo Schema
 */
var NoticeSchema = new Schema({
  title: String,
message: String,
  createdAt: Date, 
  updatedAt: Date,
});
 
// keep track of when todos are updated and created
NoticeSchema.pre('save', function(next, done){
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});
 
mongoose.model('Notice', NoticeSchema);