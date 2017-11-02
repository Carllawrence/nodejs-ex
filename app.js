// dependencies
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var hash = require('bcrypt-nodejs');
var path = require('path');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var MongoStore = require('connect-mongo')(expressSession);
var multer = require('multer');
var fs = require('fs');
var csv = require('ya-csv');

//require('./db.js');
var payslips = require('./models/payslip.js');
var sysmsgs = require('./models/sysMsg.js');
Payslip = mongoose.model('Payslip');
SysMsg = mongoose.model('SysMsg');

//watches the 'payslips' directory for added files from ftp server and then parses and saves to the data
fs.watch('./bankslips', { encoding: 'string' }, function (eventType, filename) {
  setTimeout(function () {
    if (eventType == 'rename') {
      var inputFile = './bankslips/' + filename;
      var reader = csv.createCsvFileReader(inputFile, { 'separator': '|', });
      reader.setColumnNames(['dco', 'dva', 'code', 'debit', 'credit','des','code2']);
      reader.addListener('data', function (data) {
        console.log(data);
        var payslip = new Payslip(data);
        payslip.save();
      });
      reader.addListener('error', function (e) {
        var sysmsg = new SysMsg({ type: 'err', code: e.code, msg: e });
        sysmsg.save();
      });
    }
  }, 250);
})

// specify storage directory
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  // use original file name to save file
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },

  // Filter only image files
  fileFilter: function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new Error('Only image files are allowed!'));
    }
    cb(null, true);
  }
});

var upload = multer({ storage: storage })


mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
mongoURLLabel = "";

if (mongoURL == null && process.env.DATABASE_SERVICE_NAME) {
var mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase(),
  mongoHost = process.env[mongoServiceName + '_SERVICE_HOST'],
  mongoPort = process.env[mongoServiceName + '_SERVICE_PORT'],
  mongoDatabase = process.env[mongoServiceName + '_DATABASE'],
  mongoPassword = process.env[mongoServiceName + '_PASSWORD']
  mongoUser = process.env[mongoServiceName + '_USER'];

if (mongoHost && mongoPort && mongoDatabase) {
mongoURLLabel = mongoURL = 'mongodb://';
if (mongoUser && mongoPassword) {
  mongoURL += mongoUser + ':' + mongoPassword + '@';
}
// Provide UI label that excludes user id and pw
mongoURLLabel += mongoHost + ':' + mongoPort + '/' + mongoDatabase;
mongoURL += mongoHost + ':' +  mongoPort + '/' + mongoDatabase;

}
}
var db = null,
dbDetails = new Object();

var initDb = function(callback) {
if (mongoURL == null) return;

var mongodb = require('mongodb');
if (mongodb == null) return;

mongoose.connect(mongoURL, function(err, conn) {
if (err) {
  callback(err);
  return;
}

db = conn;
dbDetails.databaseName = db.databaseName;
dbDetails.url = mongoURLLabel;
dbDetails.type = 'MongoDB';

console.log('Connected to MongoDB at: %s', mongoURL);
});
};

// create instance of express
var app = express();

//file upload api 
app.post('/upload/', upload.single('file'), function (req, res, next) {
  // req.file is the image file name
  console.log(req.file);

  // use req.body to specify any text fields submitted with the image
  console.log(req.body);

  // return OK status 
  res.status(204).end();
})

app.post('/upload/appdocs/', upload.single('file'), function (req, res, next) {
  // req.file is the image file name
  console.log(req.file);
  // use req.body to specify any text fields submitted with the image
  console.log(req.body.name);

  // return OK status 
  res.status(204).end();
})


// initialize upload directory for upload api
app.use(express.static(path.join(__dirname, './uploads')));

// require routes
var routes = require('./routes/api.js');

// define middleware
app.use(express.static(path.join(__dirname, '../public')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({
  secret: process.env.SESSION_SECRET || 'rwanda kigali',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  next();
});

// user schema/model for passport authentication
var User = require('./models/user.js');

// define passport
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// configure passport with session 
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// define user routes
app.use('/api/', routes);

//define default route to serve index.html angular single page app
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// error hndlers
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.end(JSON.stringify({
    message: err.message,
    error: {}
  }));
});

module.exports = app;
