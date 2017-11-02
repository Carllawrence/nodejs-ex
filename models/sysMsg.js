var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//system messages model
var sysMsgSchema = new Schema({
  type: String,
  code: String,
msg: String,
  createdAt: Date, 
  updatedAt: Date,
});
 
// keep track of updated and created
sysMsgSchema.pre('save', function(next, done){
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});
 
mongoose.model('SysMsg', sysMsgSchema);