var debug = require('debug')('passport-mongo');
var app = require('./app');
var https = require('https');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

//listen for connections on port 80
app.listen(port, ip);

