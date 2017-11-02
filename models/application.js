var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
 
/**
 * Todo Schema
 */
var ApplicationSchema = new Schema({
 firstname: String,
   lastname: String,
   email: String,
   userid: String,
   picUrl: String,
    other: String,
    tel: String,
    maritalStatus: Number,
    gender: Number,
    uuid: String,
    payment: String,
    schoolYear: String,
    DOB: Date,
    POB: String,
    id: String,
    nationality: String,
    decision: Number,
    approver:String,
    comments: String,
    idnum: String,
    issued: String,
    address:{Province:String, District:String, Sector:String, Cellule:String, Village:String},
    status:Number,
    academics: [{name:String, dept:String, grade:String, aggregate:String, examAuth:String}],
    orgs: [{name:String, description:String, start:Date, end:Date}],
    refs: [{name:String, occupation:String, tel:Number, email:String}],
    docs: [{name:String, required:Boolean, status:String, url:String, progress:String}],
    father: {name:String, number:Number, id:Number},
    mother: {name:String, number:Number, id:Number},
    guardian: {name:String, number:Number, id:Number},
    choice: [{DEPARTMENT:String, OPTION:String}],
    deptlist: [{choice:String}],
    deptOption: [{DEPARTMENT: String, OPTION:String}],
    createdAt:Date,
    updatedAt:Date
 
});
 
// keep track of when todos are updated and created
ApplicationSchema.pre('save', function(next, done){
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});
 
mongoose.model('Application', ApplicationSchema);