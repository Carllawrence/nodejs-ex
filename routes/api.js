var express = require('express');
var router = express.Router();
var passport = require('passport');
//setup email service
var nodemailer = require('nodemailer');
var fs = require('fs');

let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: "iprceastsys@gmail.com",
            pass: "iprceast123"
        }
    });

console.log('SMTP Configured');

var emailTemplate = '';

fs.readFile('./emailTemplate.html', 'utf8', function(oErr, sText) {
    emailTemplate = sText;
});


//require user schema
var User = require('../models/user.js');
var Event = require('../models/event.js');
var application = require('../models/application.js');
var payslips = require('../models/payslip.js');
var notices = require('../models/notify.js');
var mails = require('../models/mail.js');
var sysmsg = require('../models/sysMsg.js');
var videos = require('../models/video.js');
var courses = require('../models/course.js');
var schedules = require('../models/schedule.js');
var grades = require('../models/grade.js');
var assignments = require('../models/assignments.js');
var settings = require('../models/setting.js');
var registrations = require('../models/registration.js');
var eprojects = require('../models/eprojects.js');
var attendance = require('../models/attendance.js');




requireAuthentication = function (req, res, next) {
    console.log(req.user)
    if (req.isAuthenticated()) {
        return next();
    } else {
        return res.send(401);
    }
},

  superAuthenticationRequired = function (req, res, next) {
        console.log(req.user)
        if (req.user.status == 5) {
            return next();
        } else {
            return res.send(401);
        }
    },

    staffAuthenticationRequired = function (req, res, next) {
        console.log(req.user)
        if (req.user.status == 4) {
            return next();
        } else {
            return res.send(401);
        }
    },

    adminAuthenticationRequired = function (req, res, next) {
        console.log(req.user)
        if (req.user.status == 3) {
            return next();
        } else {
            return res.send(401);
        }
    },

    router.all('/secure/*', requireAuthentication);
router.all('/admin/*', adminAuthenticationRequired);


//register user and login
router.post('/register', function (req, res) {
    User.register(new User({ username: req.body.username, firstname: req.body.firstname, lastname: req.body.lastname, picUrl: req.body.picUrl, status: req.body.status }),
        req.body.password, function (err, account) {
            if (err) {
                return res.status(500).json({
                    err: err
                });
            }
            passport.authenticate('local')(req, res, function () {

                if (!err) {
                    server.send({
                        text: "Your IPRC East account has been created. Your username is " + req.body.username,
                        from: 'IPRC System Admin',
                        to: req.body.username,
                        cc: 'carl.lawrence@live.com',
                        subject: "Account Created"
                    }, function (err, message) {
                        console.log(err || message);
                    });

                    let message = {

    // sender info
    from: 'IPRC EAST System Admin <iprceastAdmin@iprceast.ac.rw>',

    // Comma separated list of recipients
    to: req.body.username,

    // Subject of the message
    subject: 'Your account has been created', 

    // plaintext body
    text: 'Your IPRC East account has been created. Your username is' + req.body.username,

    // HTML body
    html:'<h2>Welcome to IPRC East Student Information System</h2> <p>Your IPRC East account has been created. Your username is'+ req.body.username +'.</p><p>Kind regards,</p> <p>IPRC East System Administration</p>'
};

console.log('Sending Mail');
transporter.sendMail(message, function(error){
  if(error){
      console.log('Error occured');
      console.log(error.message);
      return;
  }
  console.log('Message sent successfully!');

transport.close(); 
});
                }

                return res.status(200).json({
                    status: 'Registration successful!'
                })

            });
        });
});

//Create sysadmin user if it does not exist

User.findOne({ username: 'sysadmin@iprceast.ac.rw' }, function (err, sysUser) {
    if (sysUser) {
        console.log(sysUser.username + ' exists');
    } else {
        User.register(new User({ username: 'sysadmin@iprceast.ac.rw', firstname: 'System', lastname: 'Admin', picUrl: 'userprofile.png', status: 5 }),
            'Jamaica62', function (err, account) {
                if (err) {
                    return res.status(500).json({
                        err: err
                    });
                }
                console.log('System User created');
            });
    }

});


// user login
router.post('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({
                err: info
            });
        }


        req.logIn(user, function (err) {
            if (err) {
                return res.status(500).json({
                    err: err
                });
            }
            if (req.body.rememberMe) {
                req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // Cookie expires after 30 days
            } else {
                req.session.cookie.expires = false; // Cookie expires at end of session
            }
            res.status(200).json({
                status: 'Login successful!'
            });
        });
    })(req, res, next);
});

// get video
router.get('/stream/:Id', function (req, res, content) {

    var filename = req.params.Id;

    var stat = fs.statSync("./uploads/"+req.params.Id);
    var range = req.headers.range;
    if (!range) {
        // 416 Wrong range
         console.log('ALL: ' + stat.size);
    res.writeHead(200, { 'Content-Length': stat.size, 'Content-Type': 'video/mp4' });
    fs.createReadStream("kids.mp4").pipe(res);
       
    }else {
    var positions = range.replace(/bytes=/, "").split("-");
    var start = parseInt(positions[0], 10);
    var total = stat.size;
    var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
    var chunksize = (end - start) + 1;

    res.writeHead(206, {
        "Content-Range": "bytes " + start + "-" + end + "/" + total,
        "Accept-Ranges": "bytes",
        "Content-Length": chunksize,
        "Content-Type": "video/mp4"
    });

    var stream = fs.createReadStream("./uploads/"+req.params.Id, { start: start, end: end })
        .on("open", function () {
            stream.pipe(res);
        }).on("error", function (err) {
            res.end(err);
        });
    }
});
// user logout
router.get('/logout', function (req, res) {
    req.logout();
        req.session.destroy(function (err) {
    if (err) { return next(err); }
    // The response should indicate that the user is no longer authenticated.
    return res.send({ authenticated: req.isAuthenticated() });
  });
    req.session = null;


});

//check authenticated status
router.get('/status', function (req, res) {
    if (!req.isAuthenticated()) {
        return res.status(200).json({
            status: false
        });
    }
    res.status(200).json({
        status: true
    });
});

router.get('/profile', function (req, res) {
    return res.send(req.isAuthenticated() ? req.user : '0');
});

router.get('/users', function (req, res) {
    if (req.isAuthenticated()) {
        User.find({}, function (err, users) {
            res.send(users);
        });
    } else {
        console.log('not authenticated');
    }
});

//get all users
router.get('/usersList', adminAuthenticationRequired, function (req, res) {
    User.find({}, function (err, users) {
        res.send(users.reduce(function (userMap, item) {
            userMap[item.id] = item;
            return userMap;
        }, {}));
    });
});

//super user remove user
router.delete('/remove', function (req, res) {
    console.log(req.body.id);
    user.findByIdAndRemove({ username: req.body.id }, function (err) {
        if (err) throw err;

        // we have deleted the user
        console.log('User deleted!');
    });
})

//super user create user
router.post('/createUser', function (req, res) {
    User.register(new User({ username: req.body.username, firstname: req.body.firstname, lastname: req.body.lastname, picUrl: req.body.picUrl, status: req.body.status }),
        req.body.password, function (err, account) {
            if (err) {
                return res.status(500).json({
                    err: err
                });
            }
        });
})

//user reset api route + uuid
router.get('/reset/:uuid', function (req, res) {
    //find user with uuid in route params
    User.findOne(req.params, function (error, user) {
        //if no user by that id
        if (error || !user) {
            res.send({
                status: 401,
                success: false
            });
        } else {
            return res.send({
                success: true,
                user: user
            });
        }
    });
})

//reset password of user
router.post('/reset', function (req, res) {
    //find the user by user uuid
    User.findOne({
        uuid: req.body.uuid
    }, function (err, user) {
        if (err) return handleError(err);
        user.setPassword(req.body.password, function (err) {
            if (err) return handleError(err);
            //change uuid to null if successful
            user.uuid = '';
            user.save();
            return res.send({
                success: true
            });
        });

    });
})

//change password
router.post('/changepassword', function (req, res) {
    //find the user
    if (req.body.username) {
        //if user is logged in
        User.findByUsername(req.body.username, function (err, user) {
            //no user found
            if (user === null) {

                return res.send({
                    success: false,
                    message: "cannot change password if you are not logged in"
                });
            } else {
                user.setPassword(req.body.password, function (err) {
                    if (err) return handleError(err);
                    user.save();
                    return res.send({
                        success: true
                    });
                });
            }
        });
    }
})

//forgot password
router.post('/forgot', function (req, res) {
    if (req.body.username) {
        //find id that belongs to the user and send it along
        User.findByUsername(req.body.username, function (err, user) {
            //no user found
            if (user === null) {
                return res.send({
                    success: false,
                    message: "no user with that e-mail address"
                });
            } else {

                //set the password token
                var guid = require('node-uuid');
                user.uuid = guid.v1();
                
                user.save(function (err) {
                    if (!err) {
                        console.log("updated", user);
                
                    } else {
                        console.log(err);
                    }
                   
                });


                // send the message and get a callback with an error or details of the message that was sent
                // this is a link to a password reset page
let message = {

    // sender info
    from: 'IPRC EAST System Admin <iprceastAdmin@iprceast.ac.rw>',

    // Comma separated list of recipients
    to: '"Receiver Name" <'+req.body.username+'>',

    // Subject of the message
    subject: 'Password Reset', 

    // plaintext body
    text: 'This the test from iprc east!',

    // HTML body
    html:'<h2>Forgot your password?</h2> <p>No problem. It happens to everyone. Use this link to reset your password: http://localhost/#!/resetform/' + user.uuid + '</p><p>Kind regards,</p> <p>IPRC East System Administration</p>'
};

console.log('Sending Mail');
transporter.sendMail(message, function(error){
  if(error){
      console.log('Error occured');
      console.log(error.message);
      return;
  }
  console.log('Message sent successfully!');

transport.close(); 
});
               
                return res.send({
                    success: true,
                    message: "reset message sent!"
                });

            }
        });
    }

})

events = require('./eventsCRUD.js');

// Server API Routes
router.param('eventId', events.event);

router.post('/events',adminAuthenticationRequired, events.create);
router.get('/events', events.query);
router.get('/events/:eventId', events.show);
router.put('/events/:eventId',adminAuthenticationRequired, events.update);
router.delete('/events/:eventId',adminAuthenticationRequired, events.remove);

courses = require('./courseCRUD.js');

// Server API Routes
router.param('courseId', courses.course);

router.post('/courses',adminAuthenticationRequired, courses.create);
router.get('/courses',requireAuthentication, courses.query);
router.get('/courses/:courseId',requireAuthentication, courses.show);
router.put('/courses/:courseId',adminAuthenticationRequired, courses.update);
router.delete('/courses/:courseId',adminAuthenticationRequired, courses.remove);

grades = require('./gradeCRUD.js');

// Server API Routes
router.param('gradeId', grades.grade);

router.post('/grades',staffAuthenticationRequired, grades.create);
router.get('/grades',requireAuthentication, grades.query);
router.get('/grades/:gradeId',requireAuthentication, grades.show);
router.put('/grades/:gradeId',staffAuthenticationRequired, grades.update);
router.delete('/grades/:gradeId',staffAuthenticationRequired, grades.remove);

assignments = require('./assignmentCRUD.js');

// Server API Routes
router.param('assignmentId', assignments.assignment);

router.post('/assignments',staffAuthenticationRequired, assignments.create);
router.get('/assignments',requireAuthentication, assignments.query);
router.get('/assignments/:assignmentId',requireAuthentication, assignments.show);
router.put('/assignments/:assignmentId', staffAuthenticationRequired,assignments.update);
router.delete('/assignments/:assignmentId',staffAuthenticationRequired, assignments.remove);

registrations = require('./registrationCRUD.js');

// Server API Routes
router.param('registrationId', registrations.registration);
router.post('/registrations', registrations.create);
router.get('/registrations',registrations.query);
router.get('/registrations/:registrationId', registrations.show);
router.put('/registrations/:registrationId', registrations.update);
router.delete('/registrations/:registrationId', registrations.remove);

schedules = require('./scheduleCRUD.js');

// Server API Routes
router.param('scheduleId', schedules.schedule);

router.post('/schedules',adminAuthenticationRequired, schedules.create);
router.get('/schedules',requireAuthentication, schedules.query);
router.get('/schedules/:scheduleId',requireAuthentication, schedules.show);
router.put('/schedules/:scheduleId',adminAuthenticationRequired, schedules.update);
router.delete('/schedules/:scheduleId',adminAuthenticationRequired, schedules.remove);

settings = require('./settingCRUD.js');

// Server API Routes
router.param('settingId', settings.setting);

router.post('/settings',superAuthenticationRequired, settings.create);
router.get('/settings', settings.query);
router.get('/settings/:settingId', settings.show);
router.put('/settings/:settingId',superAuthenticationRequired, settings.update);
router.delete('/settings/:settingId',superAuthenticationRequired, settings.remove);

videos = require('./videoCRUD.js');

// Server API Routes
router.param('videoId', videos.video);

router.post('/videos', requireAuthentication, videos.create);
router.get('/videos',requireAuthentication, videos.query);
router.get('/videos/:videoId', requireAuthentication, videos.show);
router.put('/videos/:videoId', requireAuthentication, videos.update);
router.delete('/videos/:videoId', requireAuthentication, videos.remove);

users = require('./userCRUD.js');

// Server API Routes
router.param('userId', users.user);

router.post('/appusers', users.create);
router.get('/appusers',requireAuthentication, users.query);
router.get('/appusers/:userId',requireAuthentication, users.show);
router.put('/appusers/:userId',requireAuthentication, users.update);
router.delete('/appusers/:userId',superAuthenticationRequired, users.remove);

applications = require('./applicationCRUD.js');
// Server API Routes
router.param('applicationId', applications.application);

router.post('/applications',requireAuthentication, applications.create);
router.get('/applications',adminAuthenticationRequired, applications.query);
router.get('/applications/:applicationId',requireAuthentication, applications.show);
router.put('/applications/:applicationId',requireAuthentication, applications.update);
router.delete('/applications/:applicationId',adminAuthenticationRequired, applications.remove);

payslips = require('./payslipCRUD.js');
// Server API Routes
router.param('payslipId', payslips.payslip);

router.post('/payslips',adminAuthenticationRequired, payslips.create);
router.get('/payslips',requireAuthentication, payslips.query);
router.get('/payslips/:payslipId',requireAuthentication, payslips.show);
router.put('/payslips/:payslipId',superAuthenticationRequired, payslips.update);
router.delete('/payslips/:payslipId',superAuthenticationRequired, payslips.remove);

notices = require('./notifyCRUD.js');
// Server API Routes
router.param('noticeId', notices.notice);

router.post('/notices',superAuthenticationRequired, notices.create);
router.get('/notices', notices.query);
router.get('/notices/:noticeId', notices.show);
router.put('/notices/:noticeId',superAuthenticationRequired, notices.update);
router.delete('/notices/:noticeId',superAuthenticationRequired, notices.remove);

sysMsgs = require('./sysMsgCRUD.js');
// Server API Routes
router.param('sysMsgId', sysMsgs.sysMsg);

router.post('/sysmessages',superAuthenticationRequired, sysMsgs.create);
router.get('/sysmessages',superAuthenticationRequired, sysMsgs.query);
router.get('/sysmessages/:sysMsgId',superAuthenticationRequired, sysMsgs.show);
router.put('/sysmessages/:sysMsgId',superAuthenticationRequired, sysMsgs.update);
router.delete('/sysmessages/:sysMsgId',superAuthenticationRequired, sysMsgs.remove);

mails = require('./mailCRUD.js');
// Server API Routes
router.param('mailId', mails.mail);

router.post('/mails',requireAuthentication, mails.create);
router.get('/mails',requireAuthentication, mails.query);
router.get('/mails/:mailId',requireAuthentication, mails.show);
router.put('/mails/:mailId',requireAuthentication, mails.update);
router.delete('/mails/:mailId',requireAuthentication, mails.remove);

eprojects = require('./eProject.js');
// Server API Routes
router.param('eprojectId', eprojects.eproject);

router.post('/eprojects',requireAuthentication, eprojects.create);
router.get('/eprojects',requireAuthentication, eprojects.query);
router.get('/eprojects/:eprojectId',requireAuthentication, eprojects.show);
router.put('/eprojects/:eprojectId',requireAuthentication, eprojects.update);
router.delete('/eprojects/:eprojectId',requireAuthentication, eprojects.remove);

attendances = require('./attendanceCRUD.js');
// Server API Routes
router.param('attendanceId', attendances.attendance);

router.post('/attendances',requireAuthentication, attendances.create);
router.get('/attendances',requireAuthentication, attendances.query);
router.get('/attendances/:attendanceId',requireAuthentication, attendances.show);
router.put('/attendances/:attendanceId',requireAuthentication, attendances.update);
router.delete('/attendances/:attendanceId',requireAuthentication, attendances.remove);

module.exports = router;