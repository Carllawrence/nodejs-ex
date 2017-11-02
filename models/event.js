var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
 
/**
 * Todo Schema
 */
var EventSchema = new Schema({
  title: String,
description: String,
date: Date,
venue: String,
email: String,
type: String,
picUrl: String,
url: String,
telephone: Number,
  createdAt: Date, 
  updatedAt: Date,
});
 
// keep track of when todos are updated and created
EventSchema.pre('save', function(next, done){
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});
 
mongoose.model('Event', EventSchema);