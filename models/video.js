var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Todo Schema
 */
var VideoSchema = new Schema({
  title: String,
  description: String,
  dept: String,
  author: String,
  authorPic: String,
  filename: String,
  createdAt: Date,
  updatedAt: Date

});

// keep track of when todos are updated and created
VideoSchema.pre('save', function (next, done) {
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});

mongoose.model('Video', VideoSchema);