var mongoose = require('mongoose'),

  Video = mongoose.model('Video');
 
/**
 * Find video by id and store it in the request
 */
exports.video = function(req, res, next, id) {
  Video.findById(id, function(err, video) {
    if (err) return next(err);
    if (!video) return next(new Error('Failed to load video ' + id));
    req.video = video;
    next();
  });
};
 
/**
 * List of videos
 */
exports.query = function(req, res) {
  Video.find().sort('-createdAt').exec(function(err, videos) {
    if (err) return res.json(500, err);
    res.json(videos);
  });
};
 
/**
 * Show a video
 */
exports.show = function(req, res) {
  res.json(req.video);
};

 
/**
 * Create a video
 */
exports.create = function(req, res) {
  var video = new Video(req.body);
 
  video.save(function(err) {
    if (err) return res.json(500, err);
    res.json(video);
  });
};
 
/**
 * Update a video
 */
exports.update = function(req, res) {
  Video.update({ _id: req.video._id }, req.body, { }, function(err, updatedVideo) {
    if (err) return res.json(500, err);
    res.json(updatedVideo);
  });
};
 
/**
 * Remove a video
 */
exports.remove = function(req, res) {
  console.log(req.params.videoId);
    Video.findByIdAndRemove({_id: req.params.videoId }, function (err) {
        if (err) return res.json(500, err);
    res.json(200);
      
    });
 
};