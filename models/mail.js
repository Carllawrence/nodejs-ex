var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
 
/**
 * Todo Schema
 */
var MailSchema = new Schema({
  fromid: String,
toid: String,
fromname: String,
toname: String,
subject: String,
message: String,
  createdAt: Date, 
  updatedAt: Date,
});
 
// keep track of when todos are updated and created
MailSchema.pre('save', function(next, done){
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});
 
mongoose.model('Mail', MailSchema);