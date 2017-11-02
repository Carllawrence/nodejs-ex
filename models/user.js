// user model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


var User = new Schema({
  username: String,
  firstname: String,
  lastname: String,
  picUrl: String,
  uuid: String,
  status: Number,
  Province:String,
  regNumber:String, 
  Sector:String, 
  Cellule:String, 
  Village:String,
  password: String,
  telephone: String,
  department: String,
  option:String,
  level:String,
  schoolYear: String,
  createdAt: Date,
  updatedAt: Date
  
});

// keep track of when todos are updated and created
User.pre('save', function(next, done){
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});

User.plugin(passportLocalMongoose);


module.exports = mongoose.model('User', User);